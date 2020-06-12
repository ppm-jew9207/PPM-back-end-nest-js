import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SettingsModelService } from '../../../../models/settings/settings.service';
import { Inject } from '@nestjs/common';
import { SettingsViewModel } from '../../../../models/settings/settings.interface';

export class GetSettingsQuery {}

@QueryHandler(GetSettingsQuery)
export class GetSettingsHandler implements IQueryHandler<GetSettingsQuery> {
  @Inject() private readonly _settingsViewService: SettingsModelService;

  async execute(): Promise<SettingsViewModel[]> {
    return this._settingsViewService.getAll();
  }
}
