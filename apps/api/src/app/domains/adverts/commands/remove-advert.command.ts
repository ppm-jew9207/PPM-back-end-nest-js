import { AdvertsAggregate } from '../adverts.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { AdvertRemoved } from '../events/advert-removed.event';
import { RemoveAdvertPayloadDto } from '../../../models/adverts/dtos/create-advert.dto';
import { Types } from 'mongoose';

export class RemoveAdvert {
  constructor(public data: RemoveAdvertPayloadDto) {}
}

@CommandHandler(RemoveAdvert)
export class RemoveAdvertHandler implements ICommandHandler<RemoveAdvert> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: RemoveAdvert) {
    const aggregate = new AdvertsAggregate();
    aggregate.apply(new AdvertRemoved(data));

    const advert = this._publisher.mergeObjectContext(aggregate);
    advert.commit();

    return null;
  }
}