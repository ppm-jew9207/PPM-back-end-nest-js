import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserProfileViewModule } from './userProfiles/user-profiles.module';
import { CoursesViewModule } from './courses/courses.module';
import { LessonsViewModule } from './lessons/lessons.module';
import { LearnItemsViewModule } from './learnItems/learnItems.module';
import { CategoriesViewModule } from './categories/categories.module';
import { CountriesApiViewModule } from './countriesApi/countriesApi.module';
import { PermissionsViewModule } from './permissions/permissions.module';
import { SettingsViewModule } from './settings/settings.module';
import { LikesViewModule } from './likes/likes.module';

@Module({
  imports: [
    CqrsModule,
    CategoriesViewModule,
    UserProfileViewModule,
    SettingsViewModule,
    PermissionsViewModule,
    CoursesViewModule,
    LessonsViewModule,
    LearnItemsViewModule,
    LikesViewModule,
    CountriesApiViewModule
  ],
  controllers: [],
  providers: [],
})
export class ViewModule {}
