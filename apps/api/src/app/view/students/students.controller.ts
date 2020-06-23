import { Controller, Get, UseGuards, UseInterceptors, Param } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { QueryBus } from '@nestjs/cqrs';
import { CreateStudentPayloadDto } from '../../models/students/dto/create-student-payload.dto';
import { GetStudentByIdQuery } from './queries/get-student-by-id.handler';
import { StudentPayloadDto } from '../../models/students/dto/student-payload.dto';
import { GetStudentsQuery } from './queries/get-students.handlers';

@Controller('students-view')
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class StudentsController {
    constructor(private readonly queryBus: QueryBus) { }

    @Get()
    async findAll(): Promise<StudentPayloadDto[]> {
        return this.queryBus.execute(new GetStudentsQuery())
    }
    @Get('/:id')
    async getById(@Param('id') id: string): Promise<CreateStudentPayloadDto> {
        return this.queryBus.execute(new GetStudentByIdQuery(id));
    }
}
