import { Controller, Get, Param, UseInterceptors } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { GetCategoriesQuery } from "./queries/handlers/get-categories.handler";
import { GetCategoryQuery } from "./queries/handlers/get-category.handler";
import { ApiTags } from "@nestjs/swagger";
import { PrivateRoutesPath } from "@ppm/common/main";

@Controller(PrivateRoutesPath.CATEGORIES)
@ApiTags(PrivateRoutesPath.CATEGORIES)
export class CategoriesController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.queryBus.execute(new GetCategoriesQuery());
  }

  @Get(PrivateRoutesPath.GET_BY_ID)
  async getById(@Param("id") id: string): Promise<any[]> {
    return this.queryBus.execute(new GetCategoryQuery({ id }));
  }
}
