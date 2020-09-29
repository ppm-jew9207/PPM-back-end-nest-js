import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';

export interface LeanAdvertsView {
  _id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  creator: UserRef;
}

export interface GetAdvertPayload {
  id: string;
}

export interface CreateAdvertPayload {
  title: string;
  description?: string;
  category: string;
  creator: UserRef;
  imageUrl?: string;
}

export interface UpdateAdvertPayload extends AdvertPayload {
  id: string;
}

export interface RemoveAdvertPayload {
  id: string;
}

export interface AdvertPayload {
  title: string;
  description?: string;
  category: string;
  imageUrl?: string;
}

export interface AdvertRef {
  _id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export type AdvertsViewModel = LeanAdvertsView & Document;
