
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProjectsViewModule } from './projects/projects.module';
import { AdvertsViewModule } from './adverts/adverts.module';

@Module({
  imports: [CqrsModule, ProjectsViewModule, AdvertsViewModule],
  controllers: [],
  providers: [
  ],
})
export class ViewModule {}