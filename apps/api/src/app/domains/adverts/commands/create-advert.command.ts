import { AdvertsAggregate } from '../adverts.aggregate';
import { Types } from 'mongoose';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreateAdvertPayloadDto } from '../../../models/adverts/dtos/create-advert.dto';
import { Inject, BadRequestException } from '@nestjs/common';
import { AdvertCreated } from '../events/advert-created.event';

export class CreateAdvert {
  constructor(public data: CreateAdvertPayloadDto) {}
}
@CommandHandler(CreateAdvert)
export class CreateAdvertHandler implements ICommandHandler<CreateAdvert> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: CreateAdvert) {

    if (!data.title) {
      throw new BadRequestException('Title is required!');
    }
    const aggregate = new AdvertsAggregate();
    const id = new Types.ObjectId().toHexString();
    aggregate.apply(new AdvertCreated(id, data));
    const advert = this._publisher.mergeObjectContext(aggregate);
    advert.commit();

    return null;
  }
}
