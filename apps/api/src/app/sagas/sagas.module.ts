import { Module } from '@nestjs/common';
import { CoursesSagas } from './courses.sagas';
import { UserProfilesSagas } from './user-profiles.sagas';
import { UsersModelModule } from '../models/users/users.module';
import { UserProfileModelModule } from '../models/userProfiles/user-profile.module';
import { PermissionsModelModule } from '../models/permissions/permissions.module';

@Module({
  imports: [UsersModelModule, PermissionsModelModule, UserProfileModelModule],
  providers: [CoursesSagas, UserProfilesSagas],
  exports: [],
})
export class SagasModule {}
