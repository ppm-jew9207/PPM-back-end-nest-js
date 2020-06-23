import { Module } from '@nestjs/common';
import { CqrsModule, QueryHandler } from '@nestjs/cqrs';
import { EventHandlers } from './handlers';
import { StudentModelModule } from '../../models/students/student.module';
import { QueryHandlers } from './queries';
import { StudentsController } from './students.controller';


@Module({
  imports: [CqrsModule, StudentModelModule],
  controllers: [StudentsController],
  providers: [
    ...EventHandlers,
    ...QueryHandlers,
  ],
})
export class StudentViewModule { }
