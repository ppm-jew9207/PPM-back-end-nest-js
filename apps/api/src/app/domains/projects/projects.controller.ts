import { Body, Controller, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateProject } from './commands/create-project.command';
import { CreateProjectPayloadDto } from '../../models/projects/dtos/create-project.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';

@Controller('projects')
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class ProjectsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createProject(@Body() dto: CreateProjectPayloadDto) {
    return this.commandBus.execute(new CreateProject(dto));
  }
}
