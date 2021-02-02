import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { EventHandlers } from "./handlers";
import { CategoriesController } from "./categories.controller";
import { QueryHandlers } from "./queries/handlers";
import { CategoriesModelModule } from "../../models/categories/categories.module";

@Module({
  imports: [CqrsModule, CategoriesModelModule],
  controllers: [CategoriesController],
  providers: [
    ...EventHandlers, ...QueryHandlers
  ],
})
export class CategoriesViewModule {}
