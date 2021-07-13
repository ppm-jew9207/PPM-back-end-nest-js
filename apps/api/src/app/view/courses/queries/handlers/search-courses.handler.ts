import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CoursesModelService } from '../../../../models/courses/courses.service';
import { Inject } from '@nestjs/common';
import { CoursesViewModel } from '../../../../models/courses/courses.interface';

export class SearchCoursesQuery {
  constructor(public readonly query: string) {}
}

@QueryHandler(SearchCoursesQuery)
export class SearchCoursesHandler implements IQueryHandler<SearchCoursesQuery> {
  @Inject() private readonly _coursesViewService: CoursesModelService;

  async execute({query}): Promise<CoursesViewModel[]> {
    return this._coursesViewService.search(query);
  }
}
