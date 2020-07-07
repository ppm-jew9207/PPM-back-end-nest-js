import { Module } from '@nestjs/common';
import { AdvertsSagas } from './adverts.sagas';
import { UserProfilesSagas } from './user-profiles.sagas';
import { UsersModelModule } from '../models/users/users.module';
import { UserProfileModelModule } from '../models/userProfiles/user-profile.module';
import { PermissionsModelModule } from '../models/permissions/permissions.module';

@Module({
  imports: [UsersModelModule, PermissionsModelModule, UserProfileModelModule],
  providers: [AdvertsSagas, UserProfilesSagas],
  exports: [],
})
export class SagasModule {}
