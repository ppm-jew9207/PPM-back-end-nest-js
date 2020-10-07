export interface RegistrationInterface {
  email: string;
  password: string;
  phone?: string;
}

export enum UserRoles {
  Student = 'student',
  Mentor = 'mentor',
  Admin = 'admin',
  SuperAdmin = 'superAdmin',
}

export interface User{
  userName: string;
  registrationDate: Date;
  email: string;
  phone: string;
  password: string;
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
  settings: {}
}

export interface ResetPasswordPayload{
  email: string;
  newPassword: string;
  newPasswordToken?: string;
  currentPassword?: string;
}