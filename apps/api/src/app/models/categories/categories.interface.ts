import { Document } from 'mongoose';
export interface CategoryPayload {
  title: string;
  value: string;
}
export interface LeanCategoriesView extends CategoryPayload {
  _id: string;
}

export interface UpdateCategoryPayload extends CategoryPayload {
  id: string;
}

export interface CategoryRef {
  _id: string;
  title: string;
}

export type CategoriesViewModel = LeanCategoriesView & Document;
