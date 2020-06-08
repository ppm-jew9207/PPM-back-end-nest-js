import {  Controller, Get } from '@nestjs/common';
import {  QueryBus } from '@nestjs/cqrs';
import { GetProjectsQuery } from './queries/handlers/get-projects.handler';

@Controller('projects-view')
export class ProjectsController {
  constructor(
    private readonly queryBus: QueryBus,
  ) {}


  @Get()
  async findAll(): Promise<any[]> {
    return this.queryBus.execute(new GetProjectsQuery());
  }
}
