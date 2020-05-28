import { AggregateRoot } from '@nestjs/cqrs';
import { Types } from 'mongoose';

export class ProjectsAggregate extends AggregateRoot {
  _id: Types.ObjectId;
}
