import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { LearnItemsModelService } from "../../../../models/learnItems/learnItems.service";
import { Inject } from "@nestjs/common";
import { LearnItemsViewModel } from "../../../../models/learnItems/learnItems.interface";

export class GetLearnItemsQuery {}

@QueryHandler(GetLearnItemsQuery)
export class GetLearnItemsHandler implements IQueryHandler<GetLearnItemsQuery> {
  @Inject() private readonly _learnItemsViewService: LearnItemsModelService;

  async execute(): Promise<LearnItemsViewModel[]> {
    return this._learnItemsViewService.getAll();
  }
}
