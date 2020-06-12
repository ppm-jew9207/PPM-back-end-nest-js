import { SettingsAggregate } from '../settings.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { SettingRemoved } from '../events/setting-removed.event';
import { RemoveSettingPayloadDto } from '../../../models/settings/dtos/remove-setting.dto';

export class RemoveSetting {
  constructor(public data: RemoveSettingPayloadDto) {}
}

@CommandHandler(RemoveSetting)
export class RemoveSettingHandler implements ICommandHandler<RemoveSetting> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: RemoveSetting) {
    const aggregate = new SettingsAggregate();
    aggregate.apply(new SettingRemoved(data));

    const setting = this._publisher.mergeObjectContext(aggregate);
    setting.commit();

    return null;
  }
}
