
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProjectsViewModule } from './projects/projects.module';
import { AdvertsModule } from './adverts/adverts.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [CqrsModule, ProjectsViewModule, AdvertsModule, StudentsModule],
  controllers: [],
  providers: [
  ],
})
export class ViewModule {}