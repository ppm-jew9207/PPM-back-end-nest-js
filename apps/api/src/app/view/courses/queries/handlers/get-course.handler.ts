import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CoursesModelService } from '../../../../models/courses/courses.service';
import { Inject } from '@nestjs/common';
import { CoursesViewModel } from '../../../../models/courses/courses.interface';

export class GetCourseQuery {
  constructor(public readonly id: string) {}
}

@QueryHandler(GetCourseQuery)
export class GetCourseHandler implements IQueryHandler<GetCourseQuery> {
  @Inject() private readonly _coursesViewService: CoursesModelService;

  async execute({ id }): Promise<CoursesViewModel[]> {
    return this._coursesViewService.getById(id);
  }
}
