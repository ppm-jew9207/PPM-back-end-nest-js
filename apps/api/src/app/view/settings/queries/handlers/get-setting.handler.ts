import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SettingsModelService } from '../../../../models/settings/settings.service';
import { Inject } from '@nestjs/common';
import { SettingsViewModel } from '../../../../models/settings/settings.interface';
import { GetSettingPayloadDto } from '../../../../models/settings/dtos/get-setting.dto';

export class GetSettingQuery {
  constructor(public data: GetSettingPayloadDto) {}
}

@QueryHandler(GetSettingQuery)
export class GetSettingHandler implements IQueryHandler<GetSettingQuery> {
  @Inject() private readonly _settingsViewService: SettingsModelService;

  async execute({data}): Promise<SettingsViewModel[]> {
    return this._settingsViewService.getById(data.id);
  }
}
