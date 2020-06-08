import { Document } from 'mongoose';

export enum UserStatus {
  Active = 'Active',
  Closed = 'Closed'
}

export enum UserRoles {
  User = 'user',
  Manager = 'manager',
  Admin = 'admin',
  SuperAdmin = 'superAdmin',
}

export interface User extends Document{
  userName: string;
  user_name: string;
  firstName: string;
  lastName: string;
  position: string;
  companyCode: string;
  registrationDate: Date;
  email: string;
  phone: string;
  password: string;
  birthDayDate: Date;
  role: string;
  roles: UserRoles[];
  auth: {
    email : {
      valid : boolean,
    },
    facebook: {
      userid: string
    },
    gmail: {
      userid: string
    }
  },
  settings: {
  },
}