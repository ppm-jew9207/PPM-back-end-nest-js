import { Document, Types } from 'mongoose';

export interface LeanAdvertsView {
  _id: string;
  title: string,
  description: string
}

export interface GetAdvertPayload {
  _id: Types.ObjectId
}

export interface CreateAdvertPayload {
  title: string,
  description?: string
}

export interface UpdateAdvertPayload {
  _id: Types.ObjectId;
  title?: string,
  description?: string
}

export interface RemoveAdvertPayload {
  _id: Types.ObjectId
}

export interface AdvertPayload {
  title: string,
  description?: string
}

export type AdvertsViewModel = LeanAdvertsView & Document;
