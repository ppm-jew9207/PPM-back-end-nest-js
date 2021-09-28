import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CoursesModelService } from '../../../../models/courses/courses.service';
import { Inject } from '@nestjs/common';
import { CoursesViewModel } from '../../../../models/courses/courses.interface';

interface params {
  id: string;
  perPage?: string;
  page?: string;
  returnCount?: boolean;
}
export class GetUsersCourseQuery {
  constructor(public readonly params: params) {}
}

@QueryHandler(GetUsersCourseQuery)
export class GetUsersCoursesHandler
  implements IQueryHandler<GetUsersCourseQuery> {
  @Inject() private readonly _coursesViewService: CoursesModelService;

  async execute({ params }): Promise<CoursesViewModel[]> {
    return this._coursesViewService.getByUserId(params);
  }
}
