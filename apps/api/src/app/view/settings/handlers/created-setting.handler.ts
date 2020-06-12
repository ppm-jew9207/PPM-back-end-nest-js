import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SettingCreated } from '../../../domains/settings/events/setting-created.event';
import { SettingsModelService } from '../../../models/settings/settings.service';
import { Inject } from '@nestjs/common';

@EventsHandler(SettingCreated)
export class SettingCreatedHandler implements IEventHandler<SettingCreated> {
  @Inject() private readonly _settingsViewService: SettingsModelService;

  public async handle({ id, data}: SettingCreated) {
    this._settingsViewService.create(id, data);
    return null;
  }
}