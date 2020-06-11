
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProjectsViewModule } from './projects/projects.module';
import { AdvertsViewModule } from './adverts/adverts.module';
import { SettingsViewModule } from './settings/settings.module';

@Module({
  imports: [CqrsModule, ProjectsViewModule, AdvertsViewModule, SettingsViewModule],
  controllers: [],
  providers: [
  ],
})
export class ViewModule {}