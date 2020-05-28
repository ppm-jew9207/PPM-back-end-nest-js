
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { StudentController } from './student.controller';

const commandHandlers = [];

@Module({
  imports: [CqrsModule],
  controllers: [StudentController],
  providers: [...commandHandlers],
})
export class StudentDomainModule {}