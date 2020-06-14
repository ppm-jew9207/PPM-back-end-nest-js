import { Document, Types } from 'mongoose';

export interface CreateMentor {
  type: string,
  description: string,
  firstName: string,
  lastName: string,
  photo: string,
  fieldOfProfession: string,
  company: string,
  categories: string,
  city: string,
  phone: string,
  email: string,
}

export type MentorViewModel = CreateMentor & Document;
