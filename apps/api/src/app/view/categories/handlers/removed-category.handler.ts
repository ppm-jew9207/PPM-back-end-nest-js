import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CategoryRemoved } from '../../../domains/categories/events/category-removed.event';
import { CategoriesModelService } from '../../../models/categories/categories.service';
import { Inject } from '@nestjs/common';

@EventsHandler(CategoryRemoved)
export class CategoryRemovedHandler implements IEventHandler<CategoryRemoved> {
  @Inject() private readonly _categoriesViewService: CategoriesModelService;

  public handle({ id }: CategoryRemoved): void {
    this._categoriesViewService.remove(id);
    return null;
  }
}
