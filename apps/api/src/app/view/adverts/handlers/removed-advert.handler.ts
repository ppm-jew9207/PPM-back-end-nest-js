import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AdvertRemoved } from '../../../domains/adverts/events/advert-removed.event';
import { AdvertsModelService } from '../../../models/adverts/adverts.service';
import { Inject } from '@nestjs/common';

@EventsHandler(AdvertRemoved)
export class AdvertRemovedHandler implements IEventHandler<AdvertRemoved> {
  @Inject() private readonly _advertsViewService: AdvertsModelService;

  public async handle(event: AdvertRemoved) {
    console.log('event: ' + event.advert._id);
    return this._advertsViewService.removeAdvert(event.advert);
  }
}