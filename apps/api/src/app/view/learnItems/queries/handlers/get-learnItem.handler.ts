import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { LearnItemsModelService } from '../../../../models/learnItems/learnItems.service';
import { Inject } from '@nestjs/common';
import { LearnItemsViewModel } from '../../../../models/learnItems/learnItems.interface';

export class GetLearnItemQuery {
  constructor(public readonly id: string) {}
}

@QueryHandler(GetLearnItemQuery)
export class GetLearnItemHandler implements IQueryHandler<GetLearnItemQuery> {
  @Inject() private readonly _learnItemsViewService: LearnItemsModelService;

  async execute(id): Promise<LearnItemsViewModel> {
    return this._learnItemsViewService.getById(id);
  }
}
