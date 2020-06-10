import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AdvertUpdated } from '../../../domains/adverts/events/advert-updated.event';
import { AdvertsModelService } from '../../../models/adverts/adverts.service';
import { Inject } from '@nestjs/common';
import { Types } from 'mongoose';

@EventsHandler(AdvertUpdated)
export class AdvertUpdatedHandler implements IEventHandler<AdvertUpdated> {
  @Inject() private readonly _advertsViewService: AdvertsModelService;

  public async handle(event: AdvertUpdated) {
    this._advertsViewService.updateAdvert(event.advert._id, event.advert);
    return null;
  }
}