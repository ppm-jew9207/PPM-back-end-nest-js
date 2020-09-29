import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Inject, BadRequestException } from '@nestjs/common';
import { UserProfileAggregate } from '../user-profiles.aggregate';
import { UserProfileCreated } from '../events/user-profile-created.event';
import { Types } from 'mongoose';
import { CreateUserProfilePayloadDto } from '../../../models/userProfiles/dto/create-user-profile-payload.dto';
import { UsersService } from '../../../models/users/users.service';

export class CreateUserProfile {
  constructor(
    public userId: string,
    public data: CreateUserProfilePayloadDto
  ) {}
}

@CommandHandler(CreateUserProfile)
export class CreateUserProfileHandler
  implements ICommandHandler<CreateUserProfile> {
  @Inject() private readonly _publicher: EventPublisher;
  @Inject() private readonly _usersService: UsersService;

  async execute({ userId, data }: CreateUserProfile) {
    const userFromDB = await this._usersService.getById(userId);

    if (!userFromDB) {
      throw new BadRequestException(`This user doesn't exist`);
    }

    const aggregate = new UserProfileAggregate();

    if (data.socialLinks[0] == null) {
      data.socialLinks = [];
    }

    aggregate.apply(new UserProfileCreated(data, userId));

    const userProfile = this._publicher.mergeObjectContext(aggregate);
    userProfile.commit();

    return null;
  }
}
