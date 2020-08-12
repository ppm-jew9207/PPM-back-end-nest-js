import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";

import { CategoriesController } from "./categories.controller";

import { CategoriesModelModule } from "../../models/categories/categories.module";
import { RemoveCategoryHandler } from "./commands/remove-category.command";
import { CreateCategoryHandler } from "./commands/create-category.command";
import { UpdateCategoryHandler } from "./commands/update-category.command";
import { UsersModelModule } from "../../models/users/users.module";

const commandHandlers = [
  CreateCategoryHandler,
  RemoveCategoryHandler,
  UpdateCategoryHandler,
];

@Module({
  imports: [CqrsModule, CategoriesModelModule, UsersModelModule],
  controllers: [CategoriesController],
  providers: [...commandHandlers],
})
export class CategoriesDomainModule {}
