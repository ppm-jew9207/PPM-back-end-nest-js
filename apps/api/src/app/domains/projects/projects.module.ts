
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProjectsController } from './projects.controller';
import { CreateProjectHandler } from './commands/create-project.command';
import { ProjectsModelModule } from '../../models/projects/projects.module';

const commandHandlers = [CreateProjectHandler];

@Module({
  imports: [CqrsModule, ProjectsModelModule],
  controllers: [ProjectsController],
  providers: [...commandHandlers],
})
export class ProjectsDomainModule {}