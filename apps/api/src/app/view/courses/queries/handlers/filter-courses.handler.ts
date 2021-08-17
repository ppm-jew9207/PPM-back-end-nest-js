import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CoursesModelService } from '../../../../models/courses/courses.service';
import { Inject } from '@nestjs/common';
import { CoursesViewModel } from '../../../../models/courses/courses.interface';

export interface filterParams {
  categories: string;
  learnItems: string;
}

export class FilterCoursesQuery {
  constructor(public readonly params: filterParams) {}
}

@QueryHandler(FilterCoursesQuery)
export class FilterCoursesHandler implements IQueryHandler<FilterCoursesQuery> {
  @Inject() private readonly _coursesViewService: CoursesModelService;

  async execute({ params }): Promise<CoursesViewModel[]> {
    return this._coursesViewService.filter(params);
  }
}
