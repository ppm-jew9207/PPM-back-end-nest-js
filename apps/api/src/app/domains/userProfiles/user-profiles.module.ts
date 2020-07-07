import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersModelModule } from '../../models/users/users.module';
import { UserProfilesController } from './user-profiles.controller';
import { CreateUserProfileHandler } from './commands/create-user-profile.command';
import { DeleteUserProfileHandler } from './commands/delete-user-profile.command';
import { UpdateUserProfileHandler } from './commands/update-user-profile.command';

const CommandHandlers = [
  CreateUserProfileHandler,
  DeleteUserProfileHandler,
  UpdateUserProfileHandler,
];

@Module({
  imports: [CqrsModule, UsersModelModule],
  controllers: [UserProfilesController],
  providers: [...CommandHandlers],
})
export class UserProfilesModule {}
