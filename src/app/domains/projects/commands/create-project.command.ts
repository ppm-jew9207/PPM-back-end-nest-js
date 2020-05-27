import { ProjectsAggregate } from '../projects.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreateProjectPayloadDto } from '../../../models/projects/dtos/create-project.dto';
import { Inject,} from '@nestjs/common';
import { ProjectsModelService } from '../../../models/projects/projects.service';

export class CreateProject {
  constructor(
    public data: CreateProjectPayloadDto
  ) {}
};
@CommandHandler(CreateProject)
export class CreateProjectHandler implements ICommandHandler<CreateProject> {


  async execute({data}: CreateProject) {
    // const aggregate = new ProjectsAggregate();
   
    // TODO: remove this comment this only example
    // aggregate.apply(new ProjectCreated(payload));
    // aggregate._id = new Types.ObjectId();

    // const project = this._publisher.mergeObjectContext(
    //   aggregate
    // );
    
    // project.commit();

    return null;
  }
}
