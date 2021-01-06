import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LearnItemsModelService } from "./learnItems.service";
import { LearnItemsSchema } from "./learnItems.schema";
import { ViewModels } from "../../helpers/constants";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ViewModels.LEARN_ITEMS_VIEW, schema: LearnItemsSchema },
    ]),
  ],
  providers: [LearnItemsModelService],
  exports: [LearnItemsModelService],
})
export class LearnItemsModelModule {}
