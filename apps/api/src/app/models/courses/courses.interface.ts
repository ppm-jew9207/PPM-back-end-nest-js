import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';

export interface LeanCoursesView {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  programmingLanguages?: string[];
  preRequisites?: string;
  courseImageUrl: string;
  lessonDescription?: string; 
  lessonsList?: string[];
  creator: UserRef;
  categories?: string[];
  learnItems?: string[];
}

export interface CreateCoursePayload {
  title: string;
  description?: string;
  imageUrl?: string;
  programmingLanguages?: string[];
  preRequisites?: string;
  courseImageUrl: string;
  lessonDescription?: string;
  lessonsList?: string[];
  creator: UserRef;
  categories?: string[];
  learnItems?: string[];
}

export interface CoursePayload {
  title: string;
  description?: string;
  imageUrl?: string;
  programmingLanguages?: string[];
  preRequisites?: string;
  courseImageUrl: string;
  lessonDescription?: string;
  lessonsList?: string[];
  creator: UserRef;
  categories?: string[];
  learnItems?: string[];
}

export type CoursesViewModel = LeanCoursesView & Document;
