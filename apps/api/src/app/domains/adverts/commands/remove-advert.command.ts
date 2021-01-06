import { AdvertsAggregate } from '../adverts.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { AdvertRemoved } from '../events/advert-removed.event';

export class RemoveAdvert {
  constructor(public id: string) {}
}

@CommandHandler(RemoveAdvert)
export class RemoveAdvertHandler implements ICommandHandler<RemoveAdvert> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ id }: RemoveAdvert): Promise<Boolean> {
    const aggregate = new AdvertsAggregate();
    aggregate.apply(new AdvertRemoved(id));

    const advert = this._publisher.mergeObjectContext(aggregate);
    advert.commit();

    return true;
  }
}
