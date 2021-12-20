import { CreateRatingPayload } from '../../../models/rating/rating.interface';

export class RatingCreated {
  constructor(
    public readonly id: string,
    public readonly data: CreateRatingPayload
  ) {}
}
