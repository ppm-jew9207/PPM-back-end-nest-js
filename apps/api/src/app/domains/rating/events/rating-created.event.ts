import { CreateRating } from '../../../models/rating/dto/create-rating.dto';

export class RatingCreated {
  constructor(
    public readonly rating: CreateRating,
    public readonly _id: string
  ) {}
}
