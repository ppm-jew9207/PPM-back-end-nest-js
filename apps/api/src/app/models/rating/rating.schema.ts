import { Schema } from 'mongoose';
import { ViewModels } from '../../helpers/constants';

export const RatingSchema = new Schema(
  {
    courseId: {
      type: String,
      required: true,
      ref: ViewModels.COURSES_VIEW,
    },
    userId: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
