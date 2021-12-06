import { Schema } from 'mongoose';
import { ViewModels } from '../../helpers/constants';

export const RatingSchema = new Schema(
  {
    courseId: String,
    ratingValue: Number,
    sumOfAllRating: Number,
    averageRating: Number,
    votedInTotal: Number,
  },
  { timestamps: true }
);
