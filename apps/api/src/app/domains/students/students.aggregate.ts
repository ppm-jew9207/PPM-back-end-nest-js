import { AggregateRoot } from '@nestjs/cqrs';

export class StudentAggregate extends AggregateRoot {
    id: string;
}