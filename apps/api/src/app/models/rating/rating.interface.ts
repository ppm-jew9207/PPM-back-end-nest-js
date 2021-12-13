import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';

export interface CreateRatingPayload {
  courseId: string;
  ratingValue: number;
  user: string;
}

export type RatingViewModel = CreateRatingPayload & Document;
