import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CategoriesModelService } from "../../../models/categories/categories.service";
import { Inject } from "@nestjs/common";
import { CategoriesViewModel } from "../../../models/categories/categories.interface";

export class GetCategoriesQuery {}

@QueryHandler(GetCategoriesQuery)
export class GetCategoriesHandler implements IQueryHandler<GetCategoriesQuery> {
  @Inject() private readonly _categoriesViewService: CategoriesModelService;

  async execute(): Promise<CategoriesViewModel[]> {
    return this._categoriesViewService.getAll();
  }
}
