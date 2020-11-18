import { Document } from 'mongoose';
export interface LearnItemPayload {
  id?: string;
  title?: string;
  value?: string;
}

export interface LearnItemRef {
  _id: string;
  title: string;
  value: string;
}

export type LearnItemsViewModel = LearnItemPayload & Document;
