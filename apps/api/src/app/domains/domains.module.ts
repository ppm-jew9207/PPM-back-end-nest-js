import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProjectsDomainModule } from './projects/projects.module';
import { ProjectCreated } from './projects/events/project-created.event';
import { AdvertCreated } from './adverts/events/advert-created.event';
import { MentorsModule } from './mentors/mentors.module';
import { AdvertsDomainModule } from './adverts/adverts.module';
import { AdvertUpdated } from './adverts/events/advert-updated.event';

@Module({
  imports: [CqrsModule, ProjectsDomainModule,MentorsModule, AdvertsDomainModule],
  controllers: [],
  providers: [
    ProjectCreated, AdvertCreated, AdvertUpdated
  ],
})
export class DomainsModule {}