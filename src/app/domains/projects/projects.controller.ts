import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateProject } from './commands/create-project.command';
import { CreateProjectPayloadDto } from '../../models/projects/dtos/create-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('test')
  async killDragon(@Body() dto: CreateProjectPayloadDto) {
    return this.commandBus.execute(new CreateProject(dto));
  }
}
