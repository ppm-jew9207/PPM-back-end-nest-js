import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CategoriesModelService } from '../../../../models/categories/categories.service';
import { Inject } from '@nestjs/common';
import { CategoriesViewModel } from '../../../../models/categories/categories.interface';

export class GetCategoryQuery {
  constructor(public readonly id: string) {}
}

@QueryHandler(GetCategoryQuery)
export class GetCategoryHandler implements IQueryHandler<GetCategoryQuery> {
  @Inject() private readonly _categoriesViewService: CategoriesModelService;

  async execute(id): Promise<CategoriesViewModel> {
    return this._categoriesViewService.getById(id);
  }
}
