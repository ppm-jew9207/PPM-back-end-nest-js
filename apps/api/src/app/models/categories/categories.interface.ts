import { Document } from 'mongoose';
export interface CategoryPayload {
  id: string;
  title: string;
  value: string;
}

export interface CategoryRef {
  _id: string;
  title: string;
  value: string;
}

export type CategoriesViewModel = CategoryPayload & Document;
