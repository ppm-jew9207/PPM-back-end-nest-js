import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AdvertUpdated } from '../../../domains/adverts/events/advert-updated.event';
import { AdvertsModelService } from '../../../models/adverts/adverts.service';
import { Inject } from '@nestjs/common';

@EventsHandler(AdvertUpdated)
export class AdvertUpdatedHandler implements IEventHandler<AdvertUpdated> {
  @Inject() private readonly _advertsViewService: AdvertsModelService;

  public handle({ data }: AdvertUpdated) {
    this._advertsViewService.update(data);
  }
}
