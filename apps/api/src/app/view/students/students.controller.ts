import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { QueryBus } from '@nestjs/cqrs';
import { GetStudentsQuery } from './queries/get-students.handlers';
import { StudentPayloadDto } from '../../models/students/dto/student-payload.dto';

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
}
