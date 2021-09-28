import { GetCoursesHandler } from './get-courses.handler';
import { GetCourseHandler } from './get-course.handler';
import { GetUsersCoursesHandler } from './get-users-courses.handler';
import { SearchCoursesHandler } from './search-courses.handler';
import { FilterCoursesHandler } from './filter-courses.handler';

export const QueryHandlers = [
  GetCoursesHandler,
  GetCourseHandler,
  GetUsersCoursesHandler,
  SearchCoursesHandler,
  FilterCoursesHandler,
];
