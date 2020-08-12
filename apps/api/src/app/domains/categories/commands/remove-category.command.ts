import { CategoriesAggregate } from '../categories.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { CategoryRemoved } from '../events/category-removed.event';
import { RemoveCategoryPayloadDto } from '../../../models/categories/dtos/remove-category.dto';

export class RemoveCategory {
  constructor(public data: RemoveCategoryPayloadDto) {}
}

@CommandHandler(RemoveCategory)
export class RemoveCategoryHandler implements ICommandHandler<RemoveCategory> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: RemoveCategory) {
    const aggregate = new CategoriesAggregate();
    aggregate.apply(new CategoryRemoved(data));

    const category = this._publisher.mergeObjectContext(aggregate);
    category.commit();

    return null;
  }
}
