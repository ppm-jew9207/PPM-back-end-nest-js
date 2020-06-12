import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SettingsModelService } from './settings.service';
import { SettingsSchema } from './settings.schema';
import { ViewModels } from '../../helpers/constants';

@Module({
  imports: [MongooseModule.forFeature([{ name: ViewModels.SETTINGS_VIEW, schema: SettingsSchema }])],
  providers: [SettingsModelService],
  exports: [SettingsModelService]
})
export class SettingsModelModule {}