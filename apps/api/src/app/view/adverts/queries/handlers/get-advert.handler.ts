import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AdvertsModelService } from '../../../../models/adverts/adverts.service';
import { Inject } from '@nestjs/common';
import { AdvertsViewModel } from '../../../../models/adverts/adverts.interface';
import { GetAdvertPayloadDto } from '../../../../models/adverts/dtos/get-advert.dto';

export class GetAdvertQuery {
  constructor(public data: GetAdvertPayloadDto) {}
}

@QueryHandler(GetAdvertQuery)
export class GetAdvertHandler implements IQueryHandler<GetAdvertQuery> {
  @Inject() private readonly _advertsViewService: AdvertsModelService;

  async execute({data}): Promise<AdvertsViewModel[]> {
    return this._advertsViewService.getById(data.id);
  }
}
