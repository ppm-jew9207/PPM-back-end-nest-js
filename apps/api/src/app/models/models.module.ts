
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProjectsModelModule } from './projects/projects.module';
import { UsersModelModule } from './users/users.module';

@Module({
  imports: [CqrsModule, ProjectsModelModule, UsersModelModule],
  controllers: [],
  providers: [
  ],
})
export class ModelsModule {}