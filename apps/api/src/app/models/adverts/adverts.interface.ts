import { Document, Types } from 'mongoose';

export interface LeanAdvertsView {
  _id: string;
  title: string,
  description: string
}

export interface GetAdvertPayload {
  id: string
}

export interface CreateAdvertPayload {
  title: string,
  description?: string
}

export interface UpdateAdvertPayload {
  id: string,
  title?: string,
  description?: string
}

export interface RemoveAdvertPayload {
  id: string
}

export interface AdvertPayload {
  title: string,
  description?: string
}

export type AdvertsViewModel = LeanAdvertsView & Document;
