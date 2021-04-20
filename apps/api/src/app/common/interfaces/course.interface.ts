import { Document } from 'mongoose';

export interface Course extends Document{
  title: string,
  description: string
}


