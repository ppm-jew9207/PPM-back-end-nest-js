import { LessonCreatedHandler } from "./created-lesson.handler";
import { LessonRemovedHandler } from "./removed-lesson.handler";
import { LessonUpdatedHandler } from "./updated-lesson.handler";

export const EventHandlers = [
  LessonCreatedHandler,
  LessonRemovedHandler,
  LessonUpdatedHandler,
];
