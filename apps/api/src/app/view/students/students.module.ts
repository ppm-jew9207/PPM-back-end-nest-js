import { Module } from '@nestjs/common';
import { CqrsModule, QueryHandler } from '@nestjs/cqrs';
import { EventHandlers } from './handlers';
import { StudentModelModule } from '../../models/students/student.module';
import { QueryHandlers } from './queries';
import { StudentsController } from './students.controller';
<<<<<<< HEAD

=======
>>>>>>> 6bf5dc364baef02fb8b763e393e1ff7297a6eacb

@Module({
  imports: [CqrsModule, StudentModelModule],
  controllers: [StudentsController],
  providers: [
    ...EventHandlers,
    ...QueryHandlers,
  ],
})
export class StudentViewModule { }
