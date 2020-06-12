import { AggregateRoot } from '@nestjs/cqrs';
import { Types } from 'mongoose';

export class SettingsAggregate extends AggregateRoot {
  _id: Types.ObjectId;
}
