import { AggregateRoot } from '@nestjs/cqrs';

export class MentorAggregate extends AggregateRoot{
    id: string;
}