import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SettingUpdated } from '../../../domains/settings/events/setting-updated.event';
import { SettingsModelService } from '../../../models/settings/settings.service';
import { Inject } from '@nestjs/common';

@EventsHandler(SettingUpdated)
export class SettingUpdatedHandler implements IEventHandler<SettingUpdated> {
  @Inject() private readonly _settingsViewService: SettingsModelService;

  public async handle(event: SettingUpdated) {
    this._settingsViewService.update(event.setting.id, event.setting);
    return null;
  }
}