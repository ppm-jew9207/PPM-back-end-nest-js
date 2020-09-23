import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { LessonsModelService } from "../../../../models/lessons/lessons.service";
import { Inject } from "@nestjs/common";
import { LessonsViewModel } from "../../../../models/lessons/lessons.interface";

export class GetLessonsQuery {}

@QueryHandler(GetLessonsQuery)
export class GetLessonsHandler implements IQueryHandler<GetLessonsQuery> {
  @Inject() private readonly _lessonsViewService: LessonsModelService;

  async execute(): Promise<LessonsViewModel[]> {
    return this._lessonsViewService.getAll();
  }
}
