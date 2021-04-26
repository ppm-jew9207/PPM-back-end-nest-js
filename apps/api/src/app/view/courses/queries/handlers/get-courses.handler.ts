import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CoursesModelService } from '../../../../models/courses/courses.service';
import { Inject } from '@nestjs/common';
import { CoursesViewModel } from '../../../../models/courses/courses.interface';

export class GetCoursesQuery {}

@QueryHandler(GetCoursesQuery)
export class GetCoursesHandler implements IQueryHandler<GetCoursesQuery> {
  @Inject() private readonly _coursesViewService: CoursesModelService;

  async execute(): Promise<CoursesViewModel[]> {
    return this._coursesViewService.getAll();
  }
}
