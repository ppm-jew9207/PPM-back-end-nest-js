import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MentorViewModule } from './mentors/mentors.module';
import { ProjectsViewModule } from './projects/projects.module';
import { AdvertsViewModule } from './adverts/adverts.module';
import { SettingsViewModule } from './settings/settings.module';
import { StudentViewModule } from './students/students.module';

@Module({
  imports: [
    CqrsModule,
    MentorViewModule,
    ProjectsViewModule,
    AdvertsViewModule,
    SettingsViewModule,
    StudentViewModule,
  ],
  controllers: [],
  providers: [],
})
export class ViewModule { }
