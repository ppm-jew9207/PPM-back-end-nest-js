import { Document } from 'mongoose';

export interface Advert extends Document{
  title: string,
  description: string
}


