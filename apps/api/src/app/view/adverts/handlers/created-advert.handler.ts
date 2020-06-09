import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AdvertCreated } from '../../../domains/adverts/events/advert-created.event';
import { AdvertsModelService } from '../../../models/adverts/adverts.service';
import { Inject } from '@nestjs/common';
import { Types } from 'mongoose';

@EventsHandler(AdvertCreated)
export class AdvertCreatedHandler implements IEventHandler<AdvertCreated> {
  @Inject() private readonly _advertsViewService: AdvertsModelService;

  public async handle(event: AdvertCreated) {
    const newId = new Types.ObjectId();
    this._advertsViewService.createAdvert(newId, event.advert);
    return null;
  }
}