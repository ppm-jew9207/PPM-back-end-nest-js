import { CategoriesAggregate } from '../categories.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { CategoryRemoved } from '../events/category-removed.event';

export class RemoveCategory {
  constructor(public readonly id: string) {}
}

@CommandHandler(RemoveCategory)
export class RemoveCategoryHandler implements ICommandHandler<RemoveCategory> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ id }: RemoveCategory): Promise<Boolean> {
    const aggregate = new CategoriesAggregate();
    aggregate.apply(new CategoryRemoved(id));

    const category = this._publisher.mergeObjectContext(aggregate);
    category.commit();

    return true;
  }
}
