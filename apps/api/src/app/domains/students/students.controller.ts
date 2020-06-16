import { Controller, Post, Body } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateStudent } from './commands/create-student.command';
import { CreateStudentPayloadDto } from './dto/create-student-payload.dto';

@Controller('students')
export class StudentsController {
    constructor(
        private readonly _commandBus: CommandBus,
    ) { }

    @Post()
    async createStudent(@Body() payload: CreateStudentPayloadDto) {
        return this._commandBus.execute(new CreateStudent(payload))
    }
}