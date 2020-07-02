import {
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
  Param,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { QueryBus } from '@nestjs/cqrs';
import { GetStudentByIdQuery } from './queries/get-student-by-id.handler';
import { GetStudentByEmailQuery } from './queries/get-student-by-email.handler';
import { StudentPayloadDto } from '../../models/students/dto/student-payload.dto';
import { GetStudentsQuery } from './queries/get-students.handlers';
import { Types } from 'mongoose';
import { IResponse } from '../../common/interfaces/response.interface';
import { ResponseError } from '../../common/dto/response.dto';

@Controller('students-view')
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class StudentsController {
  constructor(private readonly _queryBus: QueryBus) {}

  @Get()
  async findAll(): Promise<StudentPayloadDto[]> {
    return this._queryBus.execute(new GetStudentsQuery());
  }

  @Get('/find-by-email')
  async getByEmail(
    @Query('email') email: string
  ): Promise<StudentPayloadDto | IResponse> {
    try {
      let isValidEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
      if (!isValidEmail) throw new BadRequestException('Invalid email');
    } catch (error) {
      return new ResponseError('DATA.ERROR', error);
    }

    return this._queryBus.execute(
      new GetStudentByEmailQuery(email.toLowerCase())
    );
  }

  @Get('/:id')
  async getById(
    @Param('id') id: string
  ): Promise<StudentPayloadDto | IResponse> {
    try {
      if (!Types.ObjectId.isValid(id)) {
        return new ResponseError('DATA.ERROR', new Error('Error: Invalid Id'));
      }
    } catch (error) {
      return new ResponseError('DATA.ERROR', error);
    }

    return this._queryBus.execute(new GetStudentByIdQuery(id));
  }
}
