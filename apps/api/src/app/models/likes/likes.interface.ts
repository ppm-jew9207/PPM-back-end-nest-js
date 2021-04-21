import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';

export enum likeType {
  "like",
  "share"
}

export interface CreateLikePayload {
  course: string;
  user: string;
  type: likeType;
}

export interface LikePayload {
  _id: string;
  course: string;
  user: string;
  type: likeType;
}

export type LikesViewModel = LikePayload & Document;
