import { Document } from 'mongoose';
import { AdvertRef } from '../adverts/adverts.interface';

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
  adverts?: AdvertRef[],
}

export type MentorViewModel = CreateMentor & Document;
