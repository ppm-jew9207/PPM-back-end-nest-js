import {  Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import {  QueryBus } from '@nestjs/cqrs';
import { GetProjectsQuery } from './queries/handlers/get-projects.handler';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';

@Controller('projects-view')
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class ProjectsController {
  constructor(
    private readonly queryBus: QueryBus,
  ) {}


  @Get()
  async findAll(): Promise<any[]> {
    return this.queryBus.execute(new GetProjectsQuery());
  }
}
