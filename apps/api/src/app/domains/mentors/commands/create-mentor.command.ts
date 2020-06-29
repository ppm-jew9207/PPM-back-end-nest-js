import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Inject, BadRequestException } from '@nestjs/common';
import { MentorAggregate } from '../mentors.aggregate';
import { MentorCreated } from '../events/mentor-created.event';
import { Types } from 'mongoose';
import { CreateMentorPayloadDto } from '../../../models/mentors/dto/create-mentor-payload.dto';
import { UsersService } from '../../../models/users/users.service';

export class CreateMentor {
  constructor(public userId: string, public data: CreateMentorPayloadDto) {}
}

@CommandHandler(CreateMentor)
export class CreateMentorHandler implements ICommandHandler<CreateMentor> {
  @Inject() private readonly _publicher: EventPublisher;
  @Inject() private readonly _usersService: UsersService;

  async execute({ userId, data }: CreateMentor) {
    const userFromDB = await this._usersService.getById(userId);

    if (!userFromDB) {
      throw new BadRequestException(`This user doesn't exist`);
    }

    const aggregate = new MentorAggregate();

    aggregate.apply(
      new MentorCreated(data, new Types.ObjectId().toHexString(), userId)
    );

    const mentor = this._publicher.mergeObjectContext(aggregate);
    mentor.commit();

    return null;
  }
}
