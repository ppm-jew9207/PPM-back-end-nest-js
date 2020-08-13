import * as jwt from 'jsonwebtoken';
import { Injectable} from '@nestjs/common';
import { Model } from 'mongoose';
import { UserLean } from '../models/users/user.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class JWTService {
  constructor(@InjectModel('User') private readonly _userModel: Model<UserLean>) {}


  async createToken(email, roles) {
    const expiresIn = process.env.JWT_EXPIRES_IN,
      secretOrKey = process.env.JWT_SECRET;
    const userInfo = { email: email, roles: roles};
    const token = jwt.sign(userInfo, secretOrKey, { expiresIn });
    return {
      expiresIn: expiresIn,
      token: token,
    };
  }

  async validateUser(signedUser): Promise<UserLean> {
    const userFromDb = await this._userModel.findOne({ email: signedUser.email});
    if (userFromDb) {
        return userFromDb;
    }
    return null;
  }


}
