import { SettingsAggregate } from '../settings.aggregate';
import { Types } from 'mongoose';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreateSettingPayloadDto } from '../../../models/settings/dtos/create-setting.dto';
import { Inject, BadRequestException } from '@nestjs/common';
import { SettingCreated } from '../events/setting-created.event';

export class CreateSetting {
  constructor(public data: CreateSettingPayloadDto) {}
}
@CommandHandler(CreateSetting)
export class CreateSettingHandler implements ICommandHandler<CreateSetting> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: CreateSetting) {
    if (!data.type) {
      throw new BadRequestException('Type is required!');
    }
    if (!data.settings) {
      throw new BadRequestException('Settings are required!');
    }
    if (!data.user) {
      throw new BadRequestException('User is required!');
    }
    if (typeof data.enabled === undefined) {
      throw new BadRequestException('Enabled is required!');
    }

    const aggregate = new SettingsAggregate();
    const id = new Types.ObjectId().toHexString();
    aggregate.apply(new SettingCreated(id, data));
    const setting = this._publisher.mergeObjectContext(aggregate);
    setting.commit();

    return null;
  }
}
