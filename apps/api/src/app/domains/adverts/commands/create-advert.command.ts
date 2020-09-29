import { AdvertsAggregate } from '../adverts.aggregate';
import { Types } from 'mongoose';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreateAdvertPayloadDto } from '../../../models/adverts/dtos/create-advert.dto';
import { Inject, BadRequestException } from '@nestjs/common';
import { AdvertCreated } from '../events/advert-created.event';
import { UserLean } from '../../../models/users/user.interface';
import { CreateAdvertPayload } from '../../../models/adverts/adverts.interface';
import { UsersService } from '../../../models/users/users.service';
import { UserProfileModelService } from '../../../models/userProfiles/user-profile.service';

export class CreateAdvert {
  constructor(public data: CreateAdvertPayloadDto, public user: UserLean) {}
}
@CommandHandler(CreateAdvert)
export class CreateAdvertHandler implements ICommandHandler<CreateAdvert> {
  @Inject() private readonly _publisher: EventPublisher;
  @Inject() private readonly _usersService: UsersService;
  @Inject() private readonly _userProfileService: UserProfileModelService;

  async execute({ data, user }: CreateAdvert): Promise<Boolean> {
    const userFromDB = await this._usersService.getById(user._id.toHexString());
    const userProfile = await this._userProfileService.getById(
      user._id.toHexString()
    );
    console.log(userProfile);
    if (!userFromDB) {
      throw new BadRequestException(`This user doesn't exist`);
    }

    if (!data.title) {
      throw new BadRequestException('Title is required!');
    }

    const advertData: CreateAdvertPayload = {
      ...data,
      creator: {
        _id: userFromDB._id,
        name: `${userProfile.firstName} ${userProfile.lastName}`,
        imageUrl: userProfile.photo,
      },
    };
    const aggregate = new AdvertsAggregate();
    const id = new Types.ObjectId().toHexString();
    aggregate.apply(new AdvertCreated(id, advertData));
    const advert = this._publisher.mergeObjectContext(aggregate);
    advert.commit();

    return true;
  }
}
