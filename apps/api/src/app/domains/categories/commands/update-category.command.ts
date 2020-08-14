import { CategoriesAggregate } from '../categories.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { CategoryUpdated } from '../events/category-updated.event';
import { UpdateCategoryPayloadDto } from '../../../models/categories/dtos/update-category.dto';

export class UpdateCategory {
  constructor(public data: UpdateCategoryPayloadDto) {}
}

@CommandHandler(UpdateCategory)
export class UpdateCategoryHandler implements ICommandHandler<UpdateCategory> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: UpdateCategory): Promise<Boolean> {
    const aggregate = new CategoriesAggregate();
    aggregate.apply(new CategoryUpdated(data));

    const category = this._publisher.mergeObjectContext(aggregate);
    category.commit();

    return true;
  }
}
