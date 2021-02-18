import { LikesAggregate } from '../likes.aggregate';
import { Types } from 'mongoose';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreateLikePayloadDto } from '../../../models/likes/dto/create-like.dto';
import { Inject, BadRequestException } from '@nestjs/common';
import { LikeCreated } from '../events/like-created.event';
import { UserLean } from '../../../models/users/user.interface';
import { CreateLikePayload, likeType } from '../../../models/likes/likes.interface';
import { AdvertsModelService } from '../../../models/adverts/adverts.service';

export class CreateLike {
  constructor(public data: CreateLikePayloadDto, public user: UserLean) {}
}
@CommandHandler(CreateLike)
export class CreateLikeHandler implements ICommandHandler<CreateLike> {
  @Inject() private readonly _publisher: EventPublisher;
  @Inject() private readonly _advertsService: AdvertsModelService;

  async execute({ data, user }: CreateLike): Promise<Boolean> {
    if(!Object.values(likeType).includes(data.type)) {
      throw new BadRequestException(`Type has to be either like or share`);
    }
    if(!data.advert) {
      throw new BadRequestException(`There is no advert`);
    }
    try {
      const advert = await this._advertsService.getById(data.advert);
    } catch {
      throw new BadRequestException(`There is no such advert`);
    }

    /*TODO: check if such like or share already exist */ 
    
    const likeData: CreateLikePayload = {
      ...data,
      user: user._id
    };
    const aggregate = new LikesAggregate();

    const id = new Types.ObjectId().toHexString();

    aggregate.apply(new LikeCreated(id, likeData));
    
    const like = this._publisher.mergeObjectContext(aggregate);
    like.commit();

    return true;
  }
}
