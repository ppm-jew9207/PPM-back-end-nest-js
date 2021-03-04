import { CreateLikePayload } from '../../../models/likes/likes.interface';
export class LikeCreated {
  constructor(public readonly id: string, public readonly data: CreateLikePayload) {}
}