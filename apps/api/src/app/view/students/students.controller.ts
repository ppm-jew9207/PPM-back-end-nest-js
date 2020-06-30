import { Controller, Get, UseGuards, UseInterceptors, Param } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { QueryBus } from '@nestjs/cqrs';
import { GetStudentByIdQuery } from './queries/get-student-by-id.handler';
import { GetStudentByEmailQuery } from './queries/get-student-by-email.handler';
import { StudentPayloadDto } from '../../models/students/dto/student-payload.dto';
import { GetStudentsQuery } from './queries/get-students.handlers';

@Controller('students-view')
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class StudentsController {
    constructor(private readonly _queryBus: QueryBus) { }

    @Get()
    async findAll(): Promise<StudentPayloadDto[]> {
        return this._queryBus.execute(new GetStudentsQuery())
    }
    @Get('/:id')
    async getById(@Param('id') id: string): Promise<StudentPayloadDto> {
        return this._queryBus.execute(new GetStudentByIdQuery(id));
    }

    @Get('/:email/find-by-email')
    async getByEmail(@Param('email') email: string) {
        return this._queryBus.execute(new GetStudentByEmailQuery(email));
    }
}
