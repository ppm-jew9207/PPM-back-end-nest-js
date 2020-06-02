
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProjectsDomainModule } from './projects/projects.module';
import { ProjectCreated } from './projects/events/project-created.event';
import { AdvertsModule } from './adverts/adverts.module';

@Module({
  imports: [CqrsModule, ProjectsDomainModule, AdvertsModule],
  controllers: [],
  providers: [
    ProjectCreated
  ],
})
export class DomainsModule {}