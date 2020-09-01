import { Document } from 'mongoose';

export interface CreateUserProfile {
  type: string;
  description: string;
  firstName: string;
  lastName: string;
  photo: string;
  fieldOfProfession: string;
  company?: string;
  categories: string[];
  city: string;
  phone: string;
  email: string;
  socialLinks?: { link: String; icon: String }[];
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
  socialLinks: { link: String; icon: String }[];
}

export type UserProfileViewModel = UserProfile & Document;
