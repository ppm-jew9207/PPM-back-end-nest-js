import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CategoryUpdated } from '../../../domains/categories/events/category-updated.event';
import { CategoriesModelService } from '../../../models/categories/categories.service';
import { Inject } from '@nestjs/common';

@EventsHandler(CategoryUpdated)
export class CategoryUpdatedHandler implements IEventHandler<CategoryUpdated> {
  @Inject() private readonly _categoriesViewService: CategoriesModelService;

  public handle(event: CategoryUpdated): void {
    this._categoriesViewService.update(event.category.id, event.category);
  }
}
