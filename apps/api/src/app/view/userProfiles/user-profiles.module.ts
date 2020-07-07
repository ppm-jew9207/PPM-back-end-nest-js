import { Module } from '@nestjs/common';
import { CqrsModule, QueryHandler } from '@nestjs/cqrs';
import { EventHandlers } from './handlers';
import { UserProfileModelModule } from '../../models/userProfiles/user-profile.module';
import { QueryHandlers } from './queries';
import { UserProfilesController } from './user-profiles.controller';

@Module({
  imports: [CqrsModule, UserProfileModelModule],
  controllers: [UserProfilesController],
  providers: [...EventHandlers, ...QueryHandlers],
})
export class UserProfileViewModule {}
