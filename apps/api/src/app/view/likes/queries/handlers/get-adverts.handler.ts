import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AdvertsModelService } from '../../../../models/adverts/adverts.service';
import { Inject } from '@nestjs/common';
import { AdvertsViewModel } from '../../../../models/adverts/adverts.interface';

export class GetAdvertsQuery {}

@QueryHandler(GetAdvertsQuery)
export class GetAdvertsHandler implements IQueryHandler<GetAdvertsQuery> {
  @Inject() private readonly _advertsViewService: AdvertsModelService;

  async execute(): Promise<AdvertsViewModel[]> {
    return this._advertsViewService.getAll();
  }
}
