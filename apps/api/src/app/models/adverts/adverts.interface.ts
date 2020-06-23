import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';

export interface LeanAdvertsView {
  _id: string;
  title: string;
  description: string;
  creator: UserRef;
}

export interface GetAdvertPayload {
  id: string;
}

export interface CreateAdvertPayload {
  title: string;
  description?: string;
  creator: UserRef;
}

export interface UpdateAdvertPayload extends AdvertPayload{
  id: string;
}

export interface RemoveAdvertPayload {
  id: string;
}

export interface AdvertPayload {
  title: string;
  description?: string;
}

export interface AdvertRef {
  _id: string;
  title: string;
}

export type AdvertsViewModel = LeanAdvertsView & Document;
