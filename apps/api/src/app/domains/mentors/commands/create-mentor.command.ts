import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateMentorPayloadDto } from '../dto/create-mentor-payload.dto';
import { Inject } from '@nestjs/common';
import { MentorAggregate } from '../mentors.aggregate';
import { MentorCreated } from '../events/mentor-created.event';
import { Types } from 'mongoose';

export class CreateMentor {
  constructor(public data: CreateMentorPayloadDto) {
  }
};

@CommandHandler(CreateMentor)
export class CreateMentorHandler implements ICommandHandler<CreateMentor> {
  @Inject() private readonly _publicher: EventPublisher;

  async execute({ data }: CreateMentor) {
    const aggregate = new MentorAggregate();

    aggregate.apply(new MentorCreated(data))
    aggregate.id=new Types.ObjectId().toHexString();

    const mentor=this._publicher.mergeObjectContext(aggregate);
    mentor.commit();

    return null;
  }
} 