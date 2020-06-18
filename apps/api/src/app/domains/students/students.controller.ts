import { Controller, Post, Body, Param, Logger } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateStudent } from './commands/create-student.command';
import { CreateStudentPayloadDto } from '../../models/students/dto/create-student-payload.dto';
import { DeleteStudentId } from './commands/delete-student.command';

@Controller('students')
export class StudentsController {
    constructor(
        private readonly _commandBus: CommandBus,
    ) { }

    @Post()
    async create(@Body() payload: CreateStudentPayloadDto) {
        return this._commandBus.execute(new CreateStudent(payload))
    }

    @Post(':id/delete')
    async delete(@Param('id') id: string) {
        return this._commandBus.execute(new DeleteStudentId(id))
    }
}