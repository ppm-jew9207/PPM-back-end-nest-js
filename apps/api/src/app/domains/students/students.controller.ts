import {
  Controller,
  Post,
  Body,
  Param,
  UseGuards,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateStudent } from './commands/create-student.command';
import { CreateStudentPayloadDto } from '../../models/students/dto/create-student-payload.dto';
import { DeleteStudentCommand } from './commands/delete-student.command';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { UpdateStudentPayloadDto } from '../../models/students/dto/update-student-payload.dto';
import { UpdateStudentCommand } from './commands/update-student.command';
import { Types } from 'mongoose';
import { ResponseError } from '../../common/dto/response.dto';
import { IResponse } from '../../common/interfaces/response.interface';
import { PrivateRoutesPath } from '@ppm/common/main';

@Controller(PrivateRoutesPath.STUDENT)
@ApiTags(PrivateRoutesPath.STUDENT)
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class StudentsController {
  constructor(private readonly _commandBus: CommandBus) {}

  @Post()
  async create(@Body() payload: CreateStudentPayloadDto) {
    return this._commandBus.execute(new CreateStudent(payload));
  }

  @Post(PrivateRoutesPath.POST_DELETE)
  async delete(@Param('id') id: string): Promise<IResponse> {
    if (!Types.ObjectId.isValid(id)) {
      return new ResponseError('DATA.ERROR', 'Invalid Id');
    }
    return this._commandBus.execute(new DeleteStudentCommand(id));
  }

  @Post(PrivateRoutesPath.POST_UPDATE)
  async update(
    @Param('id') id: string,
    @Body() payload: UpdateStudentPayloadDto
  ): Promise<IResponse> {
    if (!Types.ObjectId.isValid(id)) {
      return new ResponseError('Invalid id');
    }
    return this._commandBus.execute(new UpdateStudentCommand(id, payload));
  }
}
