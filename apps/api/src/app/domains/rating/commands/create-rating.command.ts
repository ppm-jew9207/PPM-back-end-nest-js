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
import { UserLean } from '../../../models/users/user.interface';
import { CoursesModelService } from '../../../models/courses/courses.service';
import { RatingModelService } from '../../../models/rating/rating.service';
import { CreateRatingPayload } from '../../../models/rating/rating.interface';

export class CreateRating {
  constructor(public data: CreateRatingPayloadDto) {}
}

@CommandHandler(CreateRating)
export class CreateRatingHandler implements ICommandHandler<CreateRating> {
  @Inject() private readonly _publisher: EventPublisher;
  @Inject() private readonly _coursesService: CoursesModelService;
  @Inject() private readonly _ratingService: RatingModelService;

  async execute({ data }: CreateRating) {
    console.log(data);
    if (!data.courseId) {
      throw new HttpException(
        'Course ID not found',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    const ratingData: CreateRatingPayload = {
      ...data,
    };
    const aggregate = new RatingAggregate();

    const id = new Types.ObjectId().toHexString();

    aggregate.apply(new RatingCreated(id, ratingData));

    const rating = this._publisher.mergeObjectContext(aggregate);
    rating.commit();

    return true;
  }
}
