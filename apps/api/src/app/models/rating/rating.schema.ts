import { Schema } from 'mongoose';
import { ViewModels } from '../../helpers/constants';

export const RatingSchema = new Schema(
  {
    courseId: {
      type: String,
      required: true,
      ref: ViewModels.COURSES_VIEW,
    },
    user: {
      type: String,
      required: true,
      ref: ViewModels.USERS_VIEW,
    },
    ratingValue: {
      type: Number,
      required: true,
      ref: ViewModels.RATINGS_VIEW,
    },
  },
  { timestamps: true }
);
