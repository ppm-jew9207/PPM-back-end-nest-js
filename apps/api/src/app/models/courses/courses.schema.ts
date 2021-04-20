import { Schema } from 'mongoose';
import { ViewModels } from '../../helpers/constants';

export const CoursesSchema = new Schema(
  {
    title: {
      type: String,
      max: 100,
      required: true,
    },
    description: {
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
    categories: [String],
    learnItems: [String],
    preRequisites: {
      type: String,
    },
    courseImageUrl: {
      type: String,
    },
    lessonDescription: {
      type: String,
    },
    lessonsList: [String],
  },
  { timestamps: true }
);
