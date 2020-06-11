import { AggregateRoot } from '@nestjs/cqrs';
import { Types } from 'mongoose';

export class AdvertsAggregate extends AggregateRoot {
  _id: Types.ObjectId;
}
