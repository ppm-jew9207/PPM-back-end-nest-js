import { CourseCreatedHandler } from './created-course.handler';
import { CourseRemovedHandler } from './removed-course.handler';
import { CourseUpdatedHandler } from './updated-course.handler'

export const EventHandlers = [ CourseCreatedHandler, CourseRemovedHandler, CourseUpdatedHandler];
