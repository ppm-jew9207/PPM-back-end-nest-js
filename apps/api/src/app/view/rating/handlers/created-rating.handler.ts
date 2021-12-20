import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { RatingCreated } from '../../../domains/rating/events/rating-created.event';
import { RatingModelService } from '../../../models/rating/rating.service';
import { Inject } from '@nestjs/common';
@EventsHandler(RatingCreated)
export class RatingCreatedHandler implements IEventHandler<RatingCreated> {
  @Inject() private readonly _ratingModelService: RatingModelService;

  public async handle({ id, data }: RatingCreated) {
    console.log(data);
    await this._ratingModelService.createRating(id, data);
  }
}
