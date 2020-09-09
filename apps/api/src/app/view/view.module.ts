import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserProfileViewModule } from './userProfiles/user-profiles.module';
import { AdvertsViewModule } from './adverts/adverts.module';
import { LessonsViewModule } from './lessons/lessons.module';
import { CategoriesViewModule } from './categories/categories.module';
import { PermissionsViewModule } from './permissions/permissions.module';
import { SettingsViewModule } from './settings/settings.module';

@Module({
  imports: [
    CqrsModule,
    CategoriesViewModule,
    UserProfileViewModule,
    SettingsViewModule,
    PermissionsViewModule,
    AdvertsViewModule,
    LessonsViewModule,
  ],
  controllers: [],
  providers: [],
})
export class ViewModule {}
