import { AggregateRoot } from '@nestjs/cqrs';
import { Types } from 'mongoose';

export class MentorAggregate extends AggregateRoot{
    _id:Types.ObjectId;
}