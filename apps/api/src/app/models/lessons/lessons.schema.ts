import { Schema } from 'mongoose';
import { ViewModels } from '../../helpers/constants';

export const LessonsSchema = new Schema(
  {
    title: {
      type: String,
      max: 100,
      required: true,
    },
    description: {
      type: String,
    },
    datetime: {
      type: Date,
    },
    resources: [String],
    connectionUrl: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    creator: {
      _id: { type: String, ref: ViewModels.USERS_VIEW },
      name: String,
    },
    categories: [String],
  },
  { timestamps: true }
);
