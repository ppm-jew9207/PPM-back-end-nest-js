import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { LessonsModelService } from '../../../../models/lessons/lessons.service';
import { Inject } from '@nestjs/common';
import { LessonsViewModel } from '../../../../models/lessons/lessons.interface';

export class GetLessonQuery {
  constructor(public readonly id: string) {}
}

@QueryHandler(GetLessonQuery)
export class GetLessonHandler implements IQueryHandler<GetLessonQuery> {
  @Inject() private readonly _lessonsViewService: LessonsModelService;

  async execute({ id }: GetLessonQuery): Promise<LessonsViewModel> {
    return this._lessonsViewService.getById(id);
  }
}
