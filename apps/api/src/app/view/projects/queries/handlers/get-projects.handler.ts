import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ProjectsModelService } from '../../../../models/projects/projects.service';
import { Inject } from '@nestjs/common';

export class GetProjectsQuery {}

@QueryHandler(GetProjectsQuery)
export class GetProjectsHandler implements IQueryHandler<GetProjectsQuery> {
  @Inject() private readonly _projectsViewService: ProjectsModelService;

  async execute() {
    return this._projectsViewService.model.find().exec();
  }
}
