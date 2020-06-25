import { Module } from '@nestjs/common';
import { AdvertsSagas } from './adverts.sagas';
import { UsersModelModule } from '../models/users/users.module';
import { MentorModelModule } from '../models/mentors/mentor.module';


@Module({
  imports: [UsersModelModule, MentorModelModule],
  providers: [AdvertsSagas],
  exports: []
})
export class SagasModule { }