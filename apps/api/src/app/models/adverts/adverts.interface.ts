import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';

export interface LeanAdvertsView {
  _id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  programmingLanguages?: string[];
  preRequisites?: string;
  advertImageUrl: string;
  lessonDescription?: string;
  lessonsList?: string[];
  creator: UserRef;
}

export interface CreateAdvertPayload {
  title: string;
  description?: string;
  category: string;
  imageUrl?: string;
  programmingLanguages?: string[];
  preRequisites?: string;
  advertImageUrl: string;
  lessonDescription?: string;
  lessonsList?: string[];
  creator: UserRef;
}

export interface AdvertPayload {
  title: string;
  description?: string;
  category: string;
  imageUrl?: string;
  programmingLanguages?: string[];
  preRequisites?: string;
  advertImageUrl: string;
  lessonDescription?: string;
  lessonsList?: string[];
}

export type AdvertsViewModel = LeanAdvertsView & Document;
