import { AggregateRoot } from '@nestjs/cqrs';

export class UserProfileAggregate extends AggregateRoot {
  id: string;
}
