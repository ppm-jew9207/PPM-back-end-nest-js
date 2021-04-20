import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { LikesModelService } from "../../../../models/likes/likes.service";
import { Inject } from "@nestjs/common";
import { LikesViewModel } from "../../../../models/likes/likes.interface";

export class GetLikesLikeQuery {
  constructor(public readonly courseId: string) {}
}

@QueryHandler(GetLikesLikeQuery)
export class GetLikesLikeHandler implements IQueryHandler<GetLikesLikeQuery> {
  @Inject() private readonly _likesViewService: LikesModelService;

  async execute({ courseId }: GetLikesLikeQuery): Promise<LikesViewModel[]> {
    return this._likesViewService.getAllLikesByCourse(courseId);
  }
}