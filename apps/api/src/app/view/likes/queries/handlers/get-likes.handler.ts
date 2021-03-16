import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { LikesModelService } from "../../../../models/likes/likes.service";
import { Inject } from "@nestjs/common";
import { LikesViewModel } from "../../../../models/likes/likes.interface";

export class GetLikesQuery {
  constructor(public readonly advertId: string) {}
}

@QueryHandler(GetLikesQuery)
export class GetLikesHandler implements IQueryHandler<GetLikesQuery> {
  @Inject() private readonly _likesViewService: LikesModelService;

  async execute({ advertId }: GetLikesQuery): Promise<LikesViewModel[]> {
    return this._likesViewService.getAllByAdvert(advertId);
  }
}