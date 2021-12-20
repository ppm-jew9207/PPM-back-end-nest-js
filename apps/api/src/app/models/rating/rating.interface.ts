import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';

export interface CreateRatingPayload {
  courseId: string;
  rating: number;
  userId: string;
}

export type RatingViewModel = CreateRatingPayload & Document;
