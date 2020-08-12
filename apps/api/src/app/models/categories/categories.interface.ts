import { Document } from "mongoose";

export interface LeanCategoriesView {
  _id: string;
  title: string;
  value: string;
}

export interface GetCategoryPayload {
  id: string;
}

export interface CreateCategoryPayload {
  title: string;
  value: string;
}

export interface UpdateCategoryPayload extends CategoryPayload {
  id: string;
}

export interface RemoveCategoryPayload {
  id: string;
}

export interface CategoryPayload {
  title: string;
  value: string;
}

export interface CategoryRef {
  _id: string;
  title: string;
}

export type CategoriesViewModel = LeanCategoriesView & Document;
