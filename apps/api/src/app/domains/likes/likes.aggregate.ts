import { AggregateRoot } from '@nestjs/cqrs';
import { Types } from 'mongoose';

export class LikesAggregate extends AggregateRoot {
  _id: Types.ObjectId;
}
