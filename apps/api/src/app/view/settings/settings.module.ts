import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventHandlers } from './handlers';
import { SettingsController } from './settings.controller';
import { QueryHandlers } from './queries/handlers';
import { SettingsModelModule } from '../../models/settings/settings.module';

@Module({
  imports: [CqrsModule, SettingsModelModule],
  controllers: [SettingsController],
  providers: [
    ...EventHandlers,
    ...QueryHandlers,
  ],
})
export class SettingsViewModule {}
