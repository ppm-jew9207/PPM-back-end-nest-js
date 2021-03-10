import { LikesAggregate } from '../likes.aggregate';
import { Types } from 'mongoose';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreateLikePayloadDto } from '../../../models/likes/dto/create-like.dto';
import { Inject, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { LikeCreated } from '../events/like-created.event';
import { UserLean } from '../../../models/users/user.interface';
import { CreateLikePayload, likeType } from '../../../models/likes/likes.interface';
import { AdvertsModelService } from '../../../models/adverts/adverts.service';
import { LikesModelService } from '../../../models/likes/likes.service';
import { forEach } from 'lodash';

export class CreateLike {
  constructor(public data: CreateLikePayloadDto, public user: UserLean) {}
}
@CommandHandler(CreateLike)
export class CreateLikeHandler implements ICommandHandler<CreateLike> {
  @Inject() private readonly _publisher: EventPublisher;
  @Inject() private readonly _advertsService: AdvertsModelService;
  @Inject() private readonly _likesService: LikesModelService;

  async execute({ data, user }: CreateLike): Promise<boolean> {
    if(!Object.values(likeType).includes(data.type)) {
      throw new HttpException(
        'Type of this entry must be either like or share',
        HttpStatus.INTERNAL_SERVER_ERROR
      );    
    }
    if(!data.advert) {
      throw new HttpException(
        'Advert not found',
        HttpStatus.INTERNAL_SERVER_ERROR
      );    
    }
    const advert = await this._advertsService.getById(data.advert);
    if(!advert.length) {
      throw new HttpException(
        'Advert with provided ID is not found',
        HttpStatus.INTERNAL_SERVER_ERROR
      );    
    }
    const likesArray = await this._likesService.doesExist(data.advert, user._id, data.type);
    if(likesArray) {
      likesArray.forEach((likeObject) => {
        this._likesService.remove(likeObject._id);
      });
      return false;
    }
    
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
