import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { PermissionsController } from './permissions.controller';

import { PermissionsModelModule } from '../../models/permissions/permissions.module';
import { RemovePermissionHandler } from './commands/remove-permission.command';
import { CreatePermissionHandler } from './commands/create-permission.command';
import { UpdatePermissionHandler } from './commands/update-permission.command';
import { UsersModelModule } from '../../models/users/users.module';

const commandHandlers = [
  CreatePermissionHandler,
  RemovePermissionHandler,
  UpdatePermissionHandler,
];

@Module({
  imports: [CqrsModule, PermissionsModelModule, UsersModelModule],
  controllers: [PermissionsController],
  providers: [...commandHandlers],
})
export class PermissionsDomainModule {}
