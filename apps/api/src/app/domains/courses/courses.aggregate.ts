import { AggregateRoot } from '@nestjs/cqrs';
import { Types } from 'mongoose';

export class CoursesAggregate extends AggregateRoot {
  _id: Types.ObjectId;
}
