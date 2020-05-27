import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ProjectCreated } from '../../../domains/projects/events/project-created.event';
import { ProjectsModelService } from '../../../models/projects/projects.service';
import { Inject } from '@nestjs/common';
import { Types } from 'mongoose';

@EventsHandler(ProjectCreated)
export class ProjectCreatedHandler implements IEventHandler<ProjectCreated> {
  @Inject() private readonly _projectsViewService: ProjectsModelService;

  public async handle(event: ProjectCreated) {
    const newId = new Types.ObjectId();
    // await this._projectsViewService.findOneAndUpdate({_id: newId},{ ...event.project, _id: newId}, {upsert: true});
    return null;
  }
}
