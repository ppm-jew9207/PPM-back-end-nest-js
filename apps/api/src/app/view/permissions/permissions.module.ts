import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventHandlers } from './handlers';
import { PermissionsController } from './permissions.controller';
import { PermissionsModelModule } from '../../models/permissions/permissions.module';

@Module({
  imports: [CqrsModule, PermissionsModelModule],
  controllers: [PermissionsController],
  providers: [...EventHandlers],
})
export class PermissionsViewModule {}
