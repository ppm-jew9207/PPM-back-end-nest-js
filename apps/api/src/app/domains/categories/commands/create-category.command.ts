import { CategoriesAggregate } from '../categories.aggregate';
import { Types } from 'mongoose';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreateCategoryPayloadDto } from '../../../models/categories/dtos/create-category.dto';
import { Inject, BadRequestException } from '@nestjs/common';
import { CategoryCreated } from '../events/category-created.event';
import { CreateCategoryPayload } from '../../../models/categories/categories.interface';

export class CreateCategory {
  constructor(public data: CreateCategoryPayloadDto) {}
}
@CommandHandler(CreateCategory)
export class CreateCategoryHandler implements ICommandHandler<CreateCategory> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: CreateCategory) {
    if (!data.title) {
      throw new BadRequestException('Title is required!');
    }

    if (!data.value) {
      throw new BadRequestException('Value is required!');
    }
    const categoryData: CreateCategoryPayload = {
      ...data,
    };
    const aggregate = new CategoriesAggregate();
    const id = new Types.ObjectId().toHexString();
    aggregate.apply(new CategoryCreated(id, categoryData));
    const category = this._publisher.mergeObjectContext(aggregate);
    category.commit();

    return null;
  }
}
