import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventHandlers } from './handlers';
import { StudentModelModule } from '../../models/students/student.module';

@Module({
  imports: [CqrsModule, StudentModelModule],
  controllers: [],
  providers: [
    ...EventHandlers,
  ],
})
export class StudentViewModule { }
