
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MentorViewModule } from './mentors/mentors.module';
import { ProjectsViewModule } from './projects/projects.module';
import { AdvertsViewModule } from './adverts/adverts.module';

@Module({
  imports: [CqrsModule, MentorViewModule, ProjectsViewModule, AdvertsViewModule],
  controllers: [],
  providers: [
  ],
})
export class ViewModule { }