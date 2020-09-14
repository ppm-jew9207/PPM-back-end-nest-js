import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { LessonsModelService } from '../../../../models/lessons/lessons.service';
import { Inject } from '@nestjs/common';
import { LessonsViewModel } from '../../../../models/lessons/lessons.interface';

export class GetUsersLessonsQuery {
  constructor(public readonly id: string) {}
}

@QueryHandler(GetUsersLessonsQuery)
export class GetUsersLessonsHandler
  implements IQueryHandler<GetUsersLessonsQuery> {
  @Inject() private readonly _lessonsViewService: LessonsModelService;

  async execute({ id }: GetUsersLessonsQuery): Promise<LessonsViewModel[]> {
    return this._lessonsViewService.getByUserId(id);
  }
}
