import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { UpdateMentorPayloadDto } from '../dto/create-mentor-payload.dto';
import { Inject, BadRequestException } from '@nestjs/common';
import { MentorAggregate } from '../mentors.aggregate';
import { MentorUpdated } from '../events/mentor-updated.event';
import { MentorModelService } from '../../../models/mentors/mentor.service';

export class UpdateMentorCommand {
  constructor(public id: string, public data: UpdateMentorPayloadDto) {
  }
};

@CommandHandler(UpdateMentorCommand)
export class UpdateMentorCommandHandler implements ICommandHandler<UpdateMentorCommand> {
  @Inject() private readonly _publisher: EventPublisher;
  @Inject() private readonly _mentorModelService: MentorModelService;

  async execute({id, data }: UpdateMentorCommand) {
    const mentorById = await this._mentorModelService.getById(id);

    if(!mentorById){
      throw new BadRequestException('This mentor not exist');
    }

    const aggregate = new MentorAggregate();

    aggregate.apply(new MentorUpdated(id, data))

    const mentor = this._publisher.mergeObjectContext(aggregate);
    mentor.commit();

    return null;
  }
} 