import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AdvertsModelService } from '../../../../models/adverts/adverts.service';
import { Inject } from '@nestjs/common';
import { AdvertsViewModel } from '../../../../models/adverts/adverts.interface';

export class GetUsersAdvertsQuery {
  constructor(public readonly id: string) {}
}

@QueryHandler(GetUsersAdvertsQuery)
export class GetUsersAdvertsHandler
  implements IQueryHandler<GetUsersAdvertsQuery> {
  @Inject() private readonly _advertsViewService: AdvertsModelService;

  async execute({ id }): Promise<AdvertsViewModel[]> {
    return this._advertsViewService.getByUserId(id);
  }
}
