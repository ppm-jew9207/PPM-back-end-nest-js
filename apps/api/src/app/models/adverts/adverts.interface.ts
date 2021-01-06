import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';

export interface LeanAdvertsView {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  programmingLanguages?: string[];
  preRequisites?: string;
  advertImageUrl: string;
  lessonDescription?: string; 
  lessonsList?: string[];
  creator: UserRef;
  categories?: string[];
  learnItems?: string[];
}

export interface CreateAdvertPayload {
  title: string;
  description?: string;
  imageUrl?: string;
  programmingLanguages?: string[];
  preRequisites?: string;
  advertImageUrl: string;
  lessonDescription?: string;
  lessonsList?: string[];
  creator: UserRef;
  categories?: string[];
  learnItems?: string[];
}

export interface AdvertPayload {
  title: string;
  description?: string;
  imageUrl?: string;
  programmingLanguages?: string[];
  preRequisites?: string;
  advertImageUrl: string;
  lessonDescription?: string;
  lessonsList?: string[];
  creator: UserRef;
  categories?: string[];
  learnItems?: string[];
}

export type AdvertsViewModel = LeanAdvertsView & Document;
