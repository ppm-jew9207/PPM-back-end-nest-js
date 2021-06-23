import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersModelModule } from '../../models/users/users.module';
import { UserProfilesController } from './user-profiles.controller';
import { CreateUserProfileHandler } from './commands/create-user-profile.command';
import { DeleteUserProfileHandler } from './commands/delete-user-profile.command';
import { UpdateUserProfileHandler } from './commands/update-user-profile.command';
import { AddToCourseUserProfileHandler } from './commands/add-to-course-user-profile.command';
import { UserProfileModelModule } from '../../models/userProfiles/user-profile.module';

const CommandHandlers = [
  CreateUserProfileHandler,
  DeleteUserProfileHandler,
  UpdateUserProfileHandler,
  AddToCourseUserProfileHandler,
];

@Module({
  imports: [CqrsModule, UsersModelModule,UserProfileModelModule],
  controllers: [UserProfilesController],
  providers: [...CommandHandlers],
})
export class UserProfilesModule {}
