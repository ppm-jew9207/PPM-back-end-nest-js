import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AdvertsModelService } from '../../../../models/adverts/adverts.service';
import { Inject } from '@nestjs/common';
import { AdvertsViewModel } from '../../../../models/adverts/adverts.interface';

export class GetUsersAdvertQuery {
  constructor(public readonly userId: string, public readonly id: string) {}
}

@QueryHandler(GetUsersAdvertQuery)
export class GetAdvertsHandler implements IQueryHandler<GetUsersAdvertQuery> {
  @Inject() private readonly _advertsViewService: AdvertsModelService;

  async execute({ userId, id }): Promise<AdvertsViewModel> {
    return this._advertsViewService.getUsersAdvertById(userId, id);
  }
}
