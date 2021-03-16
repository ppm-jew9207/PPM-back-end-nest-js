import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { LikesModelService } from "../../../../models/likes/likes.service";
import { Inject } from "@nestjs/common";
import { LikesViewModel } from "../../../../models/likes/likes.interface";

export class GetLikesShareQuery {
  constructor(public readonly advertId: string) {}
}

@QueryHandler(GetLikesShareQuery)
export class GetLikesShareHandler implements IQueryHandler<GetLikesShareQuery> {
  @Inject() private readonly _likesViewService: LikesModelService;

  async execute({ advertId }: GetLikesShareQuery): Promise<LikesViewModel[]> {
    return this._likesViewService.getAllSharesByAdvert(advertId);
  }
}