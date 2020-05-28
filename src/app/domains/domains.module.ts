
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProjectsDomainModule } from './projects/projects.module';
import { ProjectCreated } from './projects/events/project-created.event';
import { StudentDomainModule } from './student/student.module';

@Module({
  imports: [CqrsModule, ProjectsDomainModule, StudentDomainModule],
  controllers: [],
  providers: [
    ProjectCreated
  ],
})
export class DomainsModule {}