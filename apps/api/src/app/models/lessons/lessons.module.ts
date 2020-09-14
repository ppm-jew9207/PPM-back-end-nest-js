import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LessonsModelService } from "./lessons.service";
import { LessonsSchema } from "./lessons.schema";
import { ViewModels } from "../../helpers/constants";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ViewModels.LESSONS_VIEW, schema: LessonsSchema },
    ]),
  ],
  providers: [LessonsModelService],
  exports: [LessonsModelService],
})
export class LessonsModelModule {}
