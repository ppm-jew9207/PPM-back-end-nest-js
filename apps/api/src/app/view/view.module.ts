import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserProfileViewModule } from './userProfiles/user-profiles.module';
import { AdvertsViewModule } from './adverts/adverts.module';
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
  ],
  controllers: [],
  providers: [],
})
export class ViewModule {}
