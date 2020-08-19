import { Document } from 'mongoose';

export interface CreateUserProfile {
  firstName: string;
  lastName: string;
  photo: string;
  fieldOfProfession: string;
  categories: string[];
  city: string;
}
export interface UserProfile {
  type: string;
  description: string;
  firstName: string;
  lastName: string;
  photo: string;
  fieldOfProfession: string;
  company: string;
  categories: string[];
  city: string;
  phone: string;
  email: string;
}

export type UserProfileViewModel = UserProfile & Document;
