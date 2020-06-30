import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProjectsDomainModule } from './projects/projects.module';
import { ProjectCreated } from './projects/events/project-created.event';
import { AdvertCreated } from './adverts/events/advert-created.event';
import { PermissionCreated } from './permissions/events/permission-created.event';
import { MentorsModule } from './mentors/mentors.module';
import { AdvertsDomainModule } from './adverts/adverts.module';
import { PermissionsDomainModule } from './permissions/permissions.module';
import { AdvertUpdated } from './adverts/events/advert-updated.event';
import { PermissionUpdated } from './permissions/events/permission-updated.event';
import { SettingsDomainModule } from './settings/settings.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    CqrsModule,
    ProjectsDomainModule,
    MentorsModule,
    AdvertsDomainModule,
    PermissionsDomainModule,
    SettingsDomainModule,
    StudentsModule,
  ],
  controllers: [],
  providers: [
    ProjectCreated,
    AdvertCreated,
    AdvertUpdated,
    PermissionCreated,
    PermissionUpdated,
  ],
})
export class DomainsModule {}
