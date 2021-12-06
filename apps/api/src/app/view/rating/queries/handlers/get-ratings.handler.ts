import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { RatingModelService } from 'apps/api/src/app/models/rating/rating.service';

export class GetRatingsQuery {}

@QueryHandler(GetRatingsQuery)
export class GetRatingsHandler implements IQueryHandler<GetRatingsQuery> {
  @Inject() private readonly _ratingModelService: RatingModelService;

  async execute() {
    return this._ratingModelService.model.find().exec();
  }
}
