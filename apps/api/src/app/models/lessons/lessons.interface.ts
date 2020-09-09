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

export interface GetLessonPayload {
  id: string;
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

export interface UpdateLessonPayload extends LessonPayload {
  id: string;
}

export interface RemoveLessonPayload {
  id: string;
}

export interface LessonPayload {
  title: string;
  description: string;
  datetime: Date;
  resources?: string[];
  connectionUrl: string;
  imageUrl?: string;
}

export interface LessonRef {
  _id: string;
  title: string;
  description: string;
  datetime: Date;
  resources?: string[];
  connectionUrl: string;
  imageUrl?: string;
}

export type LessonsViewModel = LeanLessonsView & Document;
