import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';

export interface LeanLessonsView {
  _id: string;
  title: string;
  description: string;
  datetime: Date;
  resources?: string[];
  connectionUrl: string;
  imageUrl?: string;
  creator: UserRef;
}
export interface CreateLessonPayload {
  title: string;
  description: string;
  datetime: Date;
  resources?: string[];
  connectionUrl: string;
  imageUrl?: string;
  creator: UserRef;
}

export interface LessonPayload {
  id: string;
  title: string;
  description: string;
  datetime: Date;
  resources?: string[];
  connectionUrl: string;
  imageUrl?: string;
}

export type LessonsViewModel = LeanLessonsView & Document;
