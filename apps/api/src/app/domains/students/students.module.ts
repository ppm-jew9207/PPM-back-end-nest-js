import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { StudentsController } from './students.controller';
import { CreateStudentHandler } from './commands/create-student.command';

const CommandHandlers = [CreateStudentHandler];

@Module({
    imports: [CqrsModule],
    controllers: [StudentsController],
    providers: [...CommandHandlers],
})
export class StudentsModule { }