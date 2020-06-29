import { Controller, Post, Body, Param, Logger, UseGuards, UseInterceptors } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateStudent } from './commands/create-student.command';
import { CreateStudentPayloadDto } from '../../models/students/dto/create-student-payload.dto';
import { DeleteStudentCommand } from './commands/delete-student.command';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { UpdateStudentPayloadDto } from '../../models/students/dto/update-student-payload.dto';
import { UpdateStudentCommand } from './commands/update-student.command';

@Controller('students')
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
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
        return this._commandBus.execute(new DeleteStudentCommand(id))
    }

    @Post(':id/update')
    async update(@Param('id') id: string, @Body() payload: UpdateStudentPayloadDto) {
        return this._commandBus.execute(new UpdateStudentCommand(id, payload))
    }
}