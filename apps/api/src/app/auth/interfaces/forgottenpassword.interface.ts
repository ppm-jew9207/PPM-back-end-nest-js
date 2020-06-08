import { Document } from 'mongoose';

export interface ForgottenPassword extends Document{
    [x: string]: any;
    email: string;
    newPasswordToken: string;
    timestamp: Date;
  }