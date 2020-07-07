import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventHandlers } from './handlers';
import { PermissionsModelModule } from '../../models/permissions/permissions.module';

@Module({
  imports: [CqrsModule, PermissionsModelModule],
  providers: [...EventHandlers],
})
export class PermissionsViewModule {}
