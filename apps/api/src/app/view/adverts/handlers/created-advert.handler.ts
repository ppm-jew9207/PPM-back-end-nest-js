import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AdvertCreated } from '../../../domains/adverts/events/advert-created.event';
import { AdvertsModelService } from '../../../models/adverts/adverts.service';
import { Inject } from '@nestjs/common';

@EventsHandler(AdvertCreated)
export class AdvertCreatedHandler implements IEventHandler<AdvertCreated> {
  @Inject() private readonly _advertsViewService: AdvertsModelService;

  public async handle(event: AdvertCreated) {
    this._advertsViewService.createAdvert(event.advert);
    return null;
  }
}