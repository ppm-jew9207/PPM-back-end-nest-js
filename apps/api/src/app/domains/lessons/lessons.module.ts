import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";

import { LessonsController } from "./lessons.controller";

import { LessonsModelModule } from "../../models/lessons/lessons.module";
import { RemoveLessonHandler } from "./commands/remove-lesson.command";
import { CreateLessonHandler } from "./commands/create-lesson.command";
import { UpdateLessonHandler } from "./commands/update-lesson.command";
import { UsersModelModule } from "../../models/users/users.module";

const commandHandlers = [
  CreateLessonHandler,
  RemoveLessonHandler,
  UpdateLessonHandler,
];

@Module({
  imports: [CqrsModule, LessonsModelModule, UsersModelModule],
  controllers: [LessonsController],
  providers: [...commandHandlers],
})
export class LessonsDomainModule {}
//ed test comment 20210107 2146