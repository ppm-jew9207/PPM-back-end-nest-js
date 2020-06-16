import { Controller, Post, Body, Param } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateStudentPayloadDto } from './dto/create-student-payload.dto';
import { CreateStudent } from './commands/create-student.command';
import { DeleteStudent } from './commands/delete-student.command';

@Controller('students')
export class StudentsController {
    constructor(
        private readonly _commandBus: CommandBus,
    ) { }

    @Post()
    async createStudent(@Body() payload: CreateStudentPayloadDto) {
        console.log('domains-controller');
        return this._commandBus.execute(new CreateStudent(payload))
    }

    @Post(':id/delete')
    async deleteStudent(@Param('id') id: string) {
        return this._commandBus.execute(new DeleteStudent({ id }))
    }
}