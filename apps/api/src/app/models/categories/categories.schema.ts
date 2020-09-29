import { Schema } from 'mongoose';
import { ViewModels } from '../../helpers/constants';

export const CategoriesSchema = new Schema(
  {
    title: {
      type: String,
      max: 100,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
