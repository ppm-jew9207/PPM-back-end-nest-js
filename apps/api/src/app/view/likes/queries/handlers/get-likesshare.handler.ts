import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { LikesModelService } from "../../../../models/likes/likes.service";
import { Inject } from "@nestjs/common";
import { LikesViewModel } from "../../../../models/likes/likes.interface";

export class GetLikesShareQuery {
  constructor(public readonly courseId: string) {}
}

@QueryHandler(GetLikesShareQuery)
export class GetLikesShareHandler implements IQueryHandler<GetLikesShareQuery> {
  @Inject() private readonly _likesViewService: LikesModelService;

  async execute({ courseId }: GetLikesShareQuery): Promise<LikesViewModel[]> {
    return this._likesViewService.getAllSharesByCourse(courseId);
  }
}