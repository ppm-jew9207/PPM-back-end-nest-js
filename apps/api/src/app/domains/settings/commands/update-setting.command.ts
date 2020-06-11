import { SettingsAggregate } from '../settings.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { SettingUpdated } from '../events/setting-updated.event';
import { UpdateSettingPayloadDto } from '../../../models/settings/dtos/update-setting.dto';

export class UpdateSetting {
  constructor(public data: UpdateSettingPayloadDto) {}
}

@CommandHandler(UpdateSetting)
export class UpdateSettingHandler implements ICommandHandler<UpdateSetting> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: UpdateSetting) {
    const aggregate = new SettingsAggregate();
    aggregate.apply(new SettingUpdated(data));

    const setting = this._publisher.mergeObjectContext(aggregate);
    setting.commit();

    return null;
  }
}
