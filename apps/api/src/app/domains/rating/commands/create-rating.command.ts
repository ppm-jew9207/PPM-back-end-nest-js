import { RatingAggregate } from '../rating.aggregate';
import { Types } from 'mongoose';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import {
  Inject,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { forEach } from 'lodash';
import { CreateRatingPayloadDto } from '../../../models/rating/dto/create-rating.dto';
import { RatingCreated } from '../events/rating-created.event';

export class CreateRating {
  constructor(public data: CreateRatingPayloadDto) {}
}

@CommandHandler(CreateRating)
export class CreateRatingHandler implements ICommandHandler<CreateRating> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: CreateRating) {
    console.log(data, 'DomainCOMMAND');
    const aggregate = new RatingAggregate();

    aggregate._id = new Types.ObjectId();
    aggregate.apply(
      new RatingCreated(data, new Types.ObjectId().toHexString())
    );

    const rating = this._publisher.mergeObjectContext(aggregate);

    rating.commit();

    return true;
  }
}
