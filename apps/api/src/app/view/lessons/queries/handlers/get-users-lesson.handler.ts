import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { LessonsModelService } from '../../../../models/lessons/lessons.service';
import { Inject } from '@nestjs/common';
import { LessonsViewModel } from '../../../../models/lessons/lessons.interface';

export class GetUsersLessonQuery {
  constructor(public readonly userId: string, public readonly id: string) {}
}

@QueryHandler(GetUsersLessonQuery)
export class GetLessonHandler implements IQueryHandler<GetUsersLessonQuery> {
  @Inject() private readonly _lessonsViewService: LessonsModelService;

  async execute({ userId, id }: GetUsersLessonQuery): Promise<LessonsViewModel> {
    return this._lessonsViewService.getUsersLessonById(userId, id);
  }
}