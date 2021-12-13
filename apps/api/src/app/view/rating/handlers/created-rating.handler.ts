import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { RatingCreated } from '../../../domains/rating/events/rating-created.event';
import { Types } from 'mongoose';
import { RatingModelService } from '../../../models/rating/rating.service';

@EventsHandler(RatingCreated)
export class RatingCreatedHandler implements IEventHandler<RatingCreated> {
  @Inject() private readonly _ratingModelService: RatingModelService;

  public async handle({ id, data }: RatingCreated) {
    await this._ratingModelService.createRating(id, data);
  }
}
