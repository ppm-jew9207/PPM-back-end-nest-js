import { Module } from '@nestjs/common';
import { AdvertsSagas } from './adverts.sagas';
import { MentorsSagas } from './mentors.sagas';
import { UsersModelModule } from '../models/users/users.module';
import { MentorModelModule } from '../models/mentors/mentor.module';
import { PermissionsModelModule } from '../models/permissions/permissions.module';

@Module({
  imports: [UsersModelModule, MentorModelModule, PermissionsModelModule],
  providers: [AdvertsSagas, MentorsSagas],
  exports: [],
})
export class SagasModule {}
