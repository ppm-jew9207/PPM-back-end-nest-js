import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CategoriesModelService } from "../../../../models/categories/categories.service";
import { Inject } from "@nestjs/common";
import { CategoriesViewModel } from "../../../../models/categories/categories.interface";
import { GetCategoryPayloadDto } from "../../../../models/categories/dtos/get-category.dto";

export class GetCategoryQuery {
  constructor(public data: GetCategoryPayloadDto) {}
}

@QueryHandler(GetCategoryQuery)
export class GetCategoryHandler implements IQueryHandler<GetCategoryQuery> {
  @Inject() private readonly _categoriesViewService: CategoriesModelService;

  async execute({ data }): Promise<CategoriesViewModel[]> {
    return this._categoriesViewService.getById(data.id);
  }
}
