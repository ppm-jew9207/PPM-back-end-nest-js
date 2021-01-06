import { GetLessonsHandler } from "./get-lessons.handler";
import { GetLessonHandler } from "./get-lesson.handler";
import { GetUsersLessonsHandler } from "./get-users-lessons.handler";
import { GetUsersLessonHandler } from "./get-users-lesson.handler";

export const QueryHandlers = [
  GetLessonsHandler,
  GetLessonHandler,
  GetUsersLessonsHandler,
  GetUsersLessonHandler
];
