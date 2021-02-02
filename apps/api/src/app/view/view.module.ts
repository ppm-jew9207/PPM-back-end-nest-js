import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserProfileViewModule } from './userProfiles/user-profiles.module';
import { AdvertsViewModule } from './adverts/adverts.module';
import { LessonsViewModule } from './lessons/lessons.module';
import { LearnItemsViewModule } from './learnItems/learnItems.module';
import { CategoriesViewModule } from './categories/categories.module';
import { CountriesApiViewModule } from './countriesApi/countriesApi.module';
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
    LearnItemsViewModule,
    CountriesApiViewModule
  ],
  controllers: [],
  providers: [],
})
export class ViewModule {}
