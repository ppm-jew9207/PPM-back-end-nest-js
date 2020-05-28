import {  Controller, Post, Body } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateProjectPayloadDto } from '../../models/projects/dtos/create-project.dto';

@Controller('student')
export class StudentController {
  constructor(
    private readonly commandBus: CommandBus,
  ) {}
// localhist:3333/api/student/create
   // TODO: sita dar keisiu nelysk
  @Post('create')
  async create( @Body()  payload: CreateProjectPayloadDto) {

    console.log(payload);
  }

}