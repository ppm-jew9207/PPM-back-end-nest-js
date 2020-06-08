import * as bcrypt from 'bcryptjs';
import * as nodemailer from 'nodemailer';
import {
  Injectable,
  HttpException,
  HttpStatus,
  HttpService
} from '@nestjs/common';
import { JWTService } from './jwt.service';
import { Model } from 'mongoose';
import { User } from '../models/users/user.interface';
import { UserDto } from '../models/users/dto/user.dto';
import { EmailVerification } from './interfaces/emailverification.interface';
import { ForgottenPassword } from './interfaces/forgottenpassword.interface';
import { ConsentRegistry } from './interfaces/consentregistry.interface';
import { InjectModel } from '@nestjs/mongoose';
import { ViewModels } from '../helpers/constants';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_SERVER_USER,
    pass: process.env.MAIL_SERVER_PASS
  }
});
@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel(ViewModels.EMAIL_VERIFICATION)
    private readonly emailVerificationModel: Model<EmailVerification>,
    @InjectModel(ViewModels.FORGOTTEN_PASSWORD)
    private readonly forgottenPasswordModel: Model<ForgottenPassword>,
    @InjectModel(ViewModels.CONSENT_REGISTRY)
    private readonly consentRegistryModel: Model<ConsentRegistry>,
    private readonly jwtService: JWTService
  ) {}

  async validateLogin(email, password) {
    const userFromDb = await this.userModel.findOne({ email: email });
    if (!userFromDb)
      throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    if (!userFromDb.auth.email.valid)
      throw new HttpException('LOGIN.EMAIL_NOT_VERIFIED', HttpStatus.FORBIDDEN);

    const isValidPass = await bcrypt.compare(password, userFromDb.password);

    if (isValidPass) {
      const accessToken = await this.jwtService.createToken(
        email,
        userFromDb.roles
      );
      return { token: accessToken, user: new UserDto(userFromDb) };
    } else {
      throw new HttpException('LOGIN.ERROR', HttpStatus.UNAUTHORIZED);
    }
  }

  async createEmailToken(email: string): Promise<boolean> {
    const emailVerification = await this.emailVerificationModel.findOne({
      email: email
    });
    if (
      emailVerification &&
      (new Date().getTime() - emailVerification.timestamp.getTime()) / 60000 <
        15
    ) {
      throw new HttpException(
        'LOGIN.EMAIL_SENDED_RECENTLY',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    } else {
      await this.emailVerificationModel.findOneAndUpdate(
        { email: email },
        {
          email: email,
          emailToken: String(Math.floor(Math.random() * 9000000) + 1000000), //Generate 7 digits number
          timestamp: new Date()
        },
        { upsert: true }
      );
      return true;
    }
  }

  async saveUserConsent(email: string): Promise<ConsentRegistry> {
    try {
      const http = new HttpService();

      const newConsent = new this.consentRegistryModel();
      newConsent.email = email;
      newConsent.date = new Date();
      newConsent.registrationForm = [
        'firstName',
        'lastName',
        'email',
        'birthday date',
        'password'
      ];
      newConsent.checkboxText = 'I accept privacy policy';
      const privacyPolicyResponse: any = await http
        .get('https://www.XXXXXX.com/api/privacy-policy')
        .toPromise();
      newConsent.privacyPolicy = privacyPolicyResponse.data.content;
      const cookiePolicyResponse: any = await http
        .get('https://www.XXXXXX.com/api/privacy-policy')
        .toPromise();
      newConsent.cookiePolicy = cookiePolicyResponse.data.content;
      newConsent.acceptedPolicy = 'Y';
      return await newConsent.save();
    } catch (error) {
      console.error(error);
    }
  }

  async createForgottenPasswordToken(
    email: string
  ): Promise<ForgottenPassword> {
    const forgottenPassword = await this.forgottenPasswordModel.findOne({
      email: email
    });
    if (
      forgottenPassword &&
      (new Date().getTime() - forgottenPassword.timestamp.getTime()) / 60000 <
        15
    ) {
      throw new HttpException(
        'RESET_PASSWORD.EMAIL_SENDED_RECENTLY',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    } else {
      const forgottenPasswordModel = await this.forgottenPasswordModel.findOneAndUpdate(
        { email: email },
        {
          email: email,
          newPasswordToken: String(
            Math.floor(Math.random() * 9000000) + 1000000
          ), //Generate 7 digits number,
          timestamp: new Date()
        },
        { upsert: true, new: true }
      );
      if (forgottenPasswordModel) {
        return forgottenPasswordModel;
      } else {
        throw new HttpException(
          'LOGIN.ERROR.GENERIC_ERROR',
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      }
    }
  }

  async verifyEmail(token: string): Promise<boolean> {
    const emailVerif = await this.emailVerificationModel.findOne({
      emailToken: token
    });
    if (emailVerif && emailVerif.email) {
      const userFromDb = await this.userModel.findOne({
        email: emailVerif.email
      });
      if (userFromDb) {
        userFromDb.auth.email.valid = true;
        const savedUser = await userFromDb.save();
        await emailVerif.remove();
        return !!savedUser;
      }
    } else {
      throw new HttpException(
        'LOGIN.EMAIL_CODE_NOT_VALID',
        HttpStatus.FORBIDDEN
      );
    }
  }

  async getForgottenPasswordModel(
    newPasswordToken: string
  ): Promise<ForgottenPassword> {
    return await this.forgottenPasswordModel.findOne({
      newPasswordToken: newPasswordToken
    });
  }

  async sendEmailVerification(email: string): Promise<boolean> {
    const model = await this.emailVerificationModel.findOne({ email: email });

    if (model && model.emailToken) {
      const url = `http://${process.env.HOST}:${process.env.PORT}/api/auth/email/verify/${model.emailToken}`;
      const mailOptions = {
        from: process.env.MAIL_SERVER_USER,
        to: email, // list of receivers (separated by ,)
        subject: 'Registracijos patvirtinimas',
        text: 'Registracijos patvirtinima',
        html:
          '<b>Sveiki, Registracijos patvirtinimas <br><a href=' +
          url +
          '>Patvirtinti  registracija</a></b>'
      };

      const sent = await new Promise<boolean>(async function(resolve, reject) {
        return await transporter.sendMail(mailOptions, async (error, info) => {
          if (error) {
            console.log('Message sent: %s', error);
            return reject(false);
          }
          console.log('Message sent: %s', info.messageId);
          resolve(true);
        });
      });
      console.log(sent);

      return sent;
    } else {
      throw new HttpException(
        'REGISTER.USER_NOT_REGISTERED',
        HttpStatus.FORBIDDEN
      );
    }
  }

  async checkPassword(email: string, password: string) {
    const userFromDb = await this.userModel.findOne({ email: email });
    if (!userFromDb)
      throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);

    return await bcrypt.compare(password, userFromDb.password);
  }

  async sendEmailForgotPassword(email: string): Promise<boolean> {
    const userFromDb = await this.userModel.findOne({ email: email });
    if (!userFromDb)
      throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);

    const tokenModel = await this.createForgottenPasswordToken(email);

    if (tokenModel && tokenModel.newPasswordToken) {
      const url = `http://${process.env.HOST}:${process.env.PORT}/api/auth/email/reset-password/${tokenModel.newPasswordToken}`;
      const mailOptions = {
        from: process.env.MAIL_SERVER_USER,
        to: email, // list of receivers (separated by ,)
        subject: 'Slaptažodžio keitimas',
        text: 'Slaptažodžio keitimas',
        html:
          '<b>Sveiki, Jei norite pakeisti slaptažodį spauskite <a href=' +
          url +
          '>čia</a></b>'
      };
      const sended = await new Promise<boolean>(async function(
        resolve,
        reject
      ) {
        return await transporter.sendMail(mailOptions, async (error, info) => {
          if (error) {
            console.log('Message sent: %s', error);
            return reject(false);
          }
          console.log('Message sent: %s', info.messageId);
          resolve(true);
        });
      });

      return sended;
    } else {
      throw new HttpException(
        'REGISTER.USER_NOT_REGISTERED',
        HttpStatus.FORBIDDEN
      );
    }
  }
}
