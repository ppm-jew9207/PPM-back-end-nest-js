import { Schema } from 'mongoose';
import { ViewModels } from '../../helpers/constants';

export const AdvertsSchema = new Schema(
  {
    title: {
      type: String,
      max: 100,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    creator: {
      _id: { type: String, ref: ViewModels.USERS_VIEW },
      name: String,
      imageUrl: String,
    },
    programmingLanguages: [String],
    preRequisites: {
      type: String,
    },
    advertImageUrl: {
      type: String,
    },
    lessonDescription: {
      type: String,
    },
    lessonsList: [String],
  },
  { timestamps: true }
);
