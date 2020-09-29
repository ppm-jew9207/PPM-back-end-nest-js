import { Document } from 'mongoose';

export interface SocialLink {
  icon: string;
  link: string;
  color: string;
}

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
  socialLinks?: SocialLink[];
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
  socialLinks?: SocialLink[];
}

export type UserProfileViewModel = UserProfile & Document;
