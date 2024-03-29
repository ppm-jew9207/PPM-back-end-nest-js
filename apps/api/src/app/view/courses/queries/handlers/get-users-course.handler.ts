import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CoursesModelService } from '../../../../models/courses/courses.service';
import { Inject } from '@nestjs/common';
import { CoursesViewModel } from '../../../../models/courses/courses.interface';

export class GetUsersCourseQuery {
  constructor(
    public readonly userId: string,
    public readonly id: string,
    public readonly page?: string,
    public readonly perPage?: string
  ) {}
}

@QueryHandler(GetUsersCourseQuery)
export class GetCoursesHandler implements IQueryHandler<GetUsersCourseQuery> {
  @Inject() private readonly _coursesViewService: CoursesModelService;

  async execute({ userId, id, page, perPage }): Promise<CoursesViewModel> {
    return this._coursesViewService.getUsersCourseById(
      userId,
      id,
      page,
      perPage
    );
  }
}
