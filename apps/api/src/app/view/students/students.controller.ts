import {
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
  Param,
  Query,
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
import { PrivateRoutesPath } from '@ppm/common/main';

@Controller(PrivateRoutesPath.STUDENT)
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class StudentsController {
  constructor(private readonly _queryBus: QueryBus) {}

  @Get()
  async findAll(): Promise<StudentPayloadDto[]> {
    return this._queryBus.execute(new GetStudentsQuery());
  }

  @Get(PrivateRoutesPath.GET_FIND_BY_ID)
  async getByEmail(
    @Query('email') email: string
  ): Promise<StudentPayloadDto | IResponse> {
    // eslint-disable-next-line no-useless-escape
    const isValidEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
    if (!isValidEmail) return new ResponseError('Invalid email');
    return this._queryBus.execute(
      new GetStudentByEmailQuery(email.toLowerCase())
    );
  }

  @Get(PrivateRoutesPath.GET_BY_ID)
  async getById(
    @Param('id') id: string
  ): Promise<StudentPayloadDto | IResponse> {
    if (!Types.ObjectId.isValid(id)) {
      return new ResponseError('Invalid id');
    }
    return this._queryBus.execute(new GetStudentByIdQuery(id));
  }
}
