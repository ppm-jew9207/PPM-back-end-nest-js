import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SettingRemoved } from '../../../domains/settings/events/setting-removed.event';
import { SettingsModelService } from '../../../models/settings/settings.service';
import { Inject } from '@nestjs/common';

@EventsHandler(SettingRemoved)
export class SettingRemovedHandler implements IEventHandler<SettingRemoved> {
  @Inject() private readonly _settingsViewService: SettingsModelService;

  public async handle(event: SettingRemoved) {
    return this._settingsViewService.remove(event.setting);
  }
}