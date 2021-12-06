import { AggregateRoot } from '@nestjs/cqrs';
import { Types } from 'mongoose';

export class RatingAggregate extends AggregateRoot {
  _id: Types.ObjectId;
}
