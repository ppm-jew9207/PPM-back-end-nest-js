import { AdvertsAggregate } from '../adverts.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { AdvertUpdated } from '../events/advert-updated.event';
import { UpdateAdvertPayloadDto } from '../../../models/adverts/dtos/update-advert.dto';

export class UpdateAdvert {
  constructor(public data: UpdateAdvertPayloadDto) {}
}

@CommandHandler(UpdateAdvert)
export class UpdateAdvertHandler implements ICommandHandler<UpdateAdvert> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({data}: UpdateAdvert): Promise<Boolean> {
    const aggregate = new AdvertsAggregate();
    aggregate.apply(new AdvertUpdated(data));

    const advert = this._publisher.mergeObjectContext(aggregate);
    advert.commit();

    return true;
  }
}
