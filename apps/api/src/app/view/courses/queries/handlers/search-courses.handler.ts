import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CoursesModelService } from '../../../../models/courses/courses.service';
import { Inject } from '@nestjs/common';
import { CoursesViewModel } from '../../../../models/courses/courses.interface';
import { searchParams } from '../../courses.controller';
export class SearchCoursesQuery {
  constructor(public readonly params: searchParams) {}
}

@QueryHandler(SearchCoursesQuery)
export class SearchCoursesHandler implements IQueryHandler<SearchCoursesQuery> {
  @Inject() private readonly _coursesViewService: CoursesModelService;

  async execute({ params }): Promise<CoursesViewModel[]> {
    return this._coursesViewService.search(params);
  }
}
