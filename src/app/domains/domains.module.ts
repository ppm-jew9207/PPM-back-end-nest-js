
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProjectsDomainModule } from './projects/projects.module';
import { ProjectCreated } from './projects/events/project-created.event';
import { MentorsModule } from './mentors/mentors.module';

@Module({
  imports: [CqrsModule, ProjectsDomainModule, MentorsModule],
  controllers: [],
  providers: [
    ProjectCreated
  ],
})
export class DomainsModule {}