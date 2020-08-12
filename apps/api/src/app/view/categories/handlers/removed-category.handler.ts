import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { CategoryRemoved } from "../../../domains/categories/events/category-removed.event";
import { CategoriesModelService } from "../../../models/categories/categories.service";
import { Inject } from "@nestjs/common";

@EventsHandler(CategoryRemoved)
export class CategoryRemovedHandler implements IEventHandler<CategoryRemoved> {
  @Inject() private readonly _categoriesViewService: CategoriesModelService;

  public async handle(event: CategoryRemoved) {
    return this._categoriesViewService.remove(event.category);
  }
}
