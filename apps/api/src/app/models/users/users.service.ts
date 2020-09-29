import { Model, Types } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLean } from './user.interface';
import { InjectModel } from '@nestjs/mongoose';
import * as _ from 'lodash'
import { SettingsDto } from './dto/settings.dto';
import { UserRoles } from '@ppm/common/main';

const saltRounds = 10;

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly _model: Model<UserLean>) {}

  
  async findAll(): Promise<UserLean[]> {
    return await this._model.find().exec();
  }

  async getById(id: string): Promise<UserLean> {
     return this._model.findOne({_id: Types.ObjectId(id)}).exec();
  }

  async findByEmail(email: string): Promise<UserLean> {
    return await this._model.findOne({email: email}).exec();
  }

  async createNewUser(newUser: CreateUserDto): Promise<UserLean> {     
    
    if(this.isValidEmail(newUser.email) && newUser.password){
      const userRegistered = await this.findByEmail(newUser.email);
      
      if(!userRegistered){
        newUser.password = await bcrypt.hash(newUser.password, saltRounds);
        const createdUser = new this._model(newUser);
        createdUser.roles = [UserRoles.Student];
        createdUser.userName = createdUser.email;
        return createdUser.save();
      } else if (!userRegistered.auth.email.valid) {
        return userRegistered;
      } else {
        throw new HttpException('REGISTRATION.USER_ALREADY_REGISTERED', HttpStatus.FORBIDDEN);
      }
    } else {
      throw new HttpException('REGISTRATION.MISSING_MANDATORY_PARAMETERS', HttpStatus.FORBIDDEN);
    } 
    
  }

  isValidEmail (email : string){
    if(email){
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    } else return false
  }

  async setPassword(email: string, newPassword: string): Promise<boolean> { 
    const userFromDb = await this._model.findOne({ email: email});
    if(!userFromDb) throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    
    userFromDb.password = await bcrypt.hash(newPassword, saltRounds);

    await userFromDb.save();
    return true;
  }

  guid(){
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  async updateSettings(settingsDto: SettingsDto): Promise<UserLean> {
    const userFromDb = await this._model.findOne({ email: settingsDto.email});
    if(!userFromDb) throw new HttpException('COMMON.USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    
    userFromDb.settings = userFromDb.settings || {};
    for (const key in settingsDto) {
      // eslint-disable-next-line no-prototype-builtins
      if (settingsDto.hasOwnProperty(key) && key != "email") {
        userFromDb.settings[key] = settingsDto[key];
      }
    }
    
    await userFromDb.save();
    return userFromDb;
  }

}