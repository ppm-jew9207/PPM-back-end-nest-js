import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CoursesModelService } from '../../../../models/courses/courses.service';
import { Inject } from '@nestjs/common';
import { CoursesViewModel } from '../../../../models/courses/courses.interface';

export class GetUsersCoursesQuery {
  constructor(public readonly id: string) {}
}

@QueryHandler(GetUsersCoursesQuery)
export class GetUsersCoursesHandler
  implements IQueryHandler<GetUsersCoursesQuery> {
  @Inject() private readonly _coursesViewService: CoursesModelService;

  async execute({ id }): Promise<CoursesViewModel[]> {
    return this._coursesViewService.getByUserId(id);
  }
}
