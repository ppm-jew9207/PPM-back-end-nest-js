import { AggregateRoot } from '@nestjs/cqrs';
import { Types } from 'mongoose';

export class MentorAggregate extends AggregateRoot{
    id:string;
}