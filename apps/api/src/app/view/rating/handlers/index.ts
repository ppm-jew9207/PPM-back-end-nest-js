import { GetAverageHandler } from '../queries/handlers/get-average.handler';
import { GetCourseIdHandler } from '../queries/handlers/get-courseId.handler';
import { GetTotalQuery } from '../queries/handlers/get-total.handler';
import { RatingCreatedHandler } from './created-rating.handler';

export const EventHandlers = [
  RatingCreatedHandler,
  GetCourseIdHandler,
  GetAverageHandler,
  GetTotalQuery,
];
