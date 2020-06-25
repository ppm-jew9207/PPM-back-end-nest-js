import { Document } from 'mongoose';

export interface CreateStudent {
  type: string,
  description: string,
  firstName: string,
  lastName: string,
  photo: string,
  fieldOfProfession: string,
  company: string,
  categories: [String],
  city: string,
  phone: string,
  email: string,
}

export interface UpdateStudent {
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

export type StudentViewModel = CreateStudent & Document;
