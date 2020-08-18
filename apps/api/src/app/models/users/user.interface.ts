import { Document } from 'mongoose';
import { User } from '@ppm/common/main';

export enum UserStatus {
  Active = 'Active',
  Closed = 'Closed'
}


export interface UserLean extends User, Document{
}