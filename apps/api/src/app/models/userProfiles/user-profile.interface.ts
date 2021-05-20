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
  state: string;
  country:string;
  phone: string;
  email: string;
  socialLinks?: SocialLink[];
  website?: string;
  courseId?: string;
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
  state: string;
  country:string;
  phone: string;
  email: string;
  socialLinks?: SocialLink[];
  website?: string;
  courseId?: string;
}

export type UserProfileViewModel = UserProfile & Document;
