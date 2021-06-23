import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CoursesModelService } from '../../../../models/courses/courses.service';
import { Inject } from '@nestjs/common';
import { CoursesViewModel } from '../../../../models/courses/courses.interface';

export class GetUsersCourseQuery {
  constructor(public readonly id: string) {}
}

@QueryHandler(GetUsersCourseQuery)
export class GetUsersCoursesHandler
  implements IQueryHandler<GetUsersCourseQuery> {
  @Inject() private readonly _coursesViewService: CoursesModelService;

  async execute({ id }): Promise<CoursesViewModel[]> {
    return this._coursesViewService.getByUserId(id);
  }
}
