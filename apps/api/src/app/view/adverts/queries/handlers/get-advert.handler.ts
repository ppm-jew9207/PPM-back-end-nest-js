import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AdvertsModelService } from '../../../../models/adverts/adverts.service';
import { Inject } from '@nestjs/common';
import { AdvertsViewModel } from '../../../../models/adverts/adverts.interface';

export class GetAdvertQuery {
  constructor(public readonly id: string) {}
}

@QueryHandler(GetAdvertQuery)
export class GetAdvertHandler implements IQueryHandler<GetAdvertQuery> {
  @Inject() private readonly _advertsViewService: AdvertsModelService;

  async execute({ id }): Promise<AdvertsViewModel> {
    return this._advertsViewService.getById(id);
  }
}
