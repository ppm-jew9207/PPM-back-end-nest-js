import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MentorViewModule } from './mentors/mentors.module';
import { AdvertsViewModule } from './adverts/adverts.module';
import { PermissionsViewModule } from './permissions/permissions.module';
import { SettingsViewModule } from './settings/settings.module';
import { StudentViewModule } from './students/students.module';

@Module({
  imports: [
    CqrsModule,
    MentorViewModule,
    AdvertsViewModule,
    SettingsViewModule,
    StudentViewModule,
    PermissionsViewModule,
  ],
  controllers: [],
  providers: [],
})
export class ViewModule {}
