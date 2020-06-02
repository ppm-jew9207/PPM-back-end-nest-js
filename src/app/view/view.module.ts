
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProjectsViewModule } from './projects/projects.module';
import { AdvertsModule } from './adverts/adverts.module';

@Module({
  imports: [CqrsModule, ProjectsViewModule, AdvertsModule],
  controllers: [],
  providers: [
  ],
})
export class ViewModule {}