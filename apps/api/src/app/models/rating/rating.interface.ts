import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';

export interface CreateRating {
  courseId: string;
  ratingValue: number;
  sumOfAllRating: number;
  averageRating: number;
  votedInTotal: number;
}

export type RatingViewModel = CreateRating & Document;
