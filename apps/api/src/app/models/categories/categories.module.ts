import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CategoriesModelService } from "./categories.service";
import { CategoriesSchema } from "./categories.schema";
import { ViewModels } from "../../helpers/constants";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ViewModels.CATEGORIES_VIEW, schema: CategoriesSchema },
    ]),
  ],
  providers: [CategoriesModelService],
  exports: [CategoriesModelService],
})
export class CategoriesModelModule {}
