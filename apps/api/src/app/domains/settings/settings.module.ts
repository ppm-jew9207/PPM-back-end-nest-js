
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { SettingsController } from './settings.controller';

import { SettingsModelModule } from '../../models/settings/settings.module';
import { RemoveSettingHandler } from './commands/remove-setting.command';
import { CreateSettingHandler } from './commands/create-setting.command';
import { UpdateSettingHandler } from './commands/update-setting.command';

const commandHandlers = [CreateSettingHandler, RemoveSettingHandler, UpdateSettingHandler];

@Module({
  imports: [CqrsModule, SettingsModelModule],
  controllers: [SettingsController],
  providers: [...commandHandlers],
})
export class SettingsDomainModule {}