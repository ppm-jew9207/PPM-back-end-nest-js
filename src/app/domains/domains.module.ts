
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProjectsDomainModule } from './projects/projects.module';
import { ProjectCreated } from './projects/events/project-created.event';

@Module({
  imports: [CqrsModule, ProjectsDomainModule],
  controllers: [],
  providers: [
    ProjectCreated
  ],
})
export class DomainsModule {}