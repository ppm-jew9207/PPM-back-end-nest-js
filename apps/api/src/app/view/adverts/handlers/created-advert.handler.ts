import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AdvertCreated } from '../../../domains/adverts/events/advert-created.event';
import { AdvertsModelService } from '../../../models/adverts/adverts.service';
import { Inject } from '@nestjs/common';

@EventsHandler(AdvertCreated)
export class AdvertCreatedHandler implements IEventHandler<AdvertCreated> {
  @Inject() private readonly _advertsViewService: AdvertsModelService;

  public async handle({ id, data}: AdvertCreated) {
    this._advertsViewService.create(id, data);
    return null;
  }
}