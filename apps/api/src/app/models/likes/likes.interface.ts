import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';

export enum likeType {
  "like",
  "share"
}

export interface CreateLikePayload {
  advert: string;
  user: string;
  type: likeType;
}

export interface LikePayload {
  _id: string;
  advert: string;
  user: string;
  type: likeType;
}

export type LikesViewModel = LikePayload & Document;
