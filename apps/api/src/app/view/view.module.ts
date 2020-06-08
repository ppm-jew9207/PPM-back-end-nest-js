
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProjectsViewModule } from './projects/projects.module';

@Module({
  imports: [CqrsModule, ProjectsViewModule],
  controllers: [],
  providers: [
  ],
})
export class ViewModule {}