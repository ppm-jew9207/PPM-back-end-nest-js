import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventHandlers } from './handlers';
import { ProjectsController } from './projects.controller';
import { QueryHandlers } from './queries/handlers';
import { ProjectsModelModule } from '../../models/projects/projects.module';

@Module({
  imports: [CqrsModule, ProjectsModelModule],
  controllers: [ProjectsController],
  providers: [
    ...EventHandlers,
    ...QueryHandlers,
  ],
})
export class ProjectsViewModule {}
