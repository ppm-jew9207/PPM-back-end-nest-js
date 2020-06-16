import { StudentCreatedHandler } from './created-student.handler';
import { StudentDeletedHandler } from './deleted-student.handler';

export const EventHandlers = [StudentCreatedHandler, StudentDeletedHandler];
