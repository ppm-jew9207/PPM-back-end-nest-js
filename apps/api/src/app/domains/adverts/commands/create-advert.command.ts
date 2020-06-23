import { AdvertsAggregate } from '../adverts.aggregate';
import { Types } from 'mongoose';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreateAdvertPayloadDto } from '../../../models/adverts/dtos/create-advert.dto';
import { Inject, BadRequestException } from '@nestjs/common';
import { AdvertCreated } from '../events/advert-created.event';
import { User } from '../../../models/users/user.interface';
import { CreateAdvertPayload } from '../../../models/adverts/adverts.interface';
import { UsersService } from '../../../models/users/users.service';

export class CreateAdvert {
  constructor(public data: CreateAdvertPayloadDto, public user: User) {}
}
@CommandHandler(CreateAdvert)
export class CreateAdvertHandler implements ICommandHandler<CreateAdvert> {
  @Inject() private readonly _publisher: EventPublisher;
  @Inject() private readonly _usersService: UsersService;

  async execute({ data, user }: CreateAdvert) {

    const userFromDB = await this._usersService.getById(user._id.toHexString());
    if (!userFromDB) {
      throw new BadRequestException(`This user doesn't exist`);
    }

    if (!data.title) {
      throw new BadRequestException('Title is required!');
    }
    
    const advertData: CreateAdvertPayload = {...data, creator: {_id: userFromDB._id, name: userFromDB.userName}}
    const aggregate = new AdvertsAggregate();
    const id = new Types.ObjectId().toHexString();
    aggregate.apply(new AdvertCreated(id, advertData));
    const advert = this._publisher.mergeObjectContext(aggregate);
    advert.commit();

    return null;
  }
}
