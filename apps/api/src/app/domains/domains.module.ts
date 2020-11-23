import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AdvertCreated } from './adverts/events/advert-created.event';
import { LessonCreated } from './lessons/events/lesson-created.event';
import { LearnItemCreated } from './learnItems/events/learnItem-created.event';
import { CategoryCreated } from './categories/events/category-created.event';
import { PermissionCreated } from './permissions/events/permission-created.event';
import { UserProfilesModule } from './userProfiles/user-profiles.module';
import { AdvertsDomainModule } from './adverts/adverts.module';
import { LessonsDomainModule } from './lessons/lessons.module';
import { LearnItemsDomainModule } from './learnItems/learnItems.module';
import { CategoriesDomainModule } from './categories/categories.module';
import { PermissionsDomainModule } from './permissions/permissions.module';
import { AdvertUpdated } from './adverts/events/advert-updated.event';
import { LessonUpdated } from './lessons/events/lesson-updated.event';
import { LearnItemUpdated } from './learnItems/events/learnItem-updated.event';
import { CategoryUpdated } from './categories/events/category-updated.event';
import { PermissionUpdated } from './permissions/events/permission-updated.event';
import { SettingsDomainModule } from './settings/settings.module';
import { ImagesDomainModule } from './images/images.module';

@Module({
  imports: [
    CqrsModule,
    AdvertsDomainModule,
    LessonsDomainModule,
    LearnItemsDomainModule,
    CategoriesDomainModule,
    PermissionsDomainModule,
    UserProfilesModule,
    SettingsDomainModule,
    ImagesDomainModule,
  ],
  controllers: [],
  providers: [
    AdvertCreated,
    LessonCreated,
    LearnItemCreated,
    CategoryCreated,
    AdvertUpdated,
    LessonUpdated,
    LearnItemUpdated,
    CategoryUpdated,
    PermissionCreated,
    PermissionUpdated,
  ],
})
export class DomainsModule {}
