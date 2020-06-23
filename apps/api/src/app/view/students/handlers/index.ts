import { StudentCreatedHandler } from './created-student.handler';
import { StudentDeletedHandler } from './deleted-student.handler';
import { StudentUpdatedHandler } from './updated-student.handler';

export const EventHandlers = [StudentCreatedHandler, StudentDeletedHandler, StudentUpdatedHandler];
