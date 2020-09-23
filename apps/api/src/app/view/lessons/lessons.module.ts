import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { EventHandlers } from "./handlers";
import { LessonsController } from "./lessons.controller";
import { QueryHandlers } from "./queries/handlers";
import { LessonsModelModule } from "../../models/lessons/lessons.module";

@Module({
  imports: [CqrsModule, LessonsModelModule],
  controllers: [LessonsController],
  providers: [...EventHandlers, ...QueryHandlers],
})
export class LessonsViewModule {}
