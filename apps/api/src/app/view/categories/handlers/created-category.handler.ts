import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CategoryCreated } from '../../../domains/categories/events/category-created.event';
import { CategoriesModelService } from '../../../models/categories/categories.service';
import { Inject } from '@nestjs/common';

@EventsHandler(CategoryCreated)
export class CategoryCreatedHandler implements IEventHandler<CategoryCreated> {
  @Inject() private readonly _categoriesViewService: CategoriesModelService;

  public handle({ id, data }: CategoryCreated): void {
    this._categoriesViewService.create(id, data);
    return null;
  }
}
