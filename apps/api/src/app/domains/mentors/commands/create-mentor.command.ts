import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { MentorAggregate } from '../mentors.aggregate';
import { MentorCreated } from '../events/mentor-created.event';
import { Types } from 'mongoose';
import { CreateMentorPayloadDto } from '../../../models/mentors/dto/create-mentor-payload.dto';

export class CreateMentor {
  constructor(public userId: string, public data: CreateMentorPayloadDto) {
  }
};

@CommandHandler(CreateMentor)
export class CreateMentorHandler implements ICommandHandler<CreateMentor> {
  @Inject() private readonly _publicher: EventPublisher;

  async execute({userId, data }: CreateMentor) {
    
    const aggregate = new MentorAggregate();

    aggregate.apply(new MentorCreated(data, new Types.ObjectId().toHexString()))

    const mentor = this._publicher.mergeObjectContext(aggregate);
    mentor.commit();

    return null;
  }
} 