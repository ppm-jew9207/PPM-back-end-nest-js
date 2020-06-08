import { ProjectsAggregate } from '../projects.aggregate';
import { Types } from 'mongoose';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreateProjectPayloadDto } from '../../../models/projects/dtos/create-project.dto';
import { Inject } from '@nestjs/common';
import { ProjectCreated } from '../events/project-created.event';

export class CreateProject {
  constructor(public data: CreateProjectPayloadDto) {}
}
@CommandHandler(CreateProject)
export class CreateProjectHandler implements ICommandHandler<CreateProject> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: CreateProject) {
    const aggregate = new ProjectsAggregate();

    // TODO: remove this comment this only example
    aggregate.apply(new ProjectCreated(data));
    aggregate._id = new Types.ObjectId();

    const project = this._publisher.mergeObjectContext(aggregate);

    project.commit();

    return null;
  }
}
