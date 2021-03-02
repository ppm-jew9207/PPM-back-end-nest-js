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

export class CreateLike {
  constructor(public data: CreateLikePayloadDto, public user: UserLean) {}
}
@CommandHandler(CreateLike)
export class CreateLikeHandler implements ICommandHandler<CreateLike> {
  @Inject() private readonly _publisher: EventPublisher;
  @Inject() private readonly _advertsService: AdvertsModelService;
  @Inject() private readonly _likesService: LikesModelService;

  async execute({ data, user }: CreateLike): Promise<Boolean> {
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
    try {
      const advert = await this._advertsService.getById(data.advert);
    } catch {
      throw new HttpException(
        'Incorrect advert',
        HttpStatus.INTERNAL_SERVER_ERROR
      );    
    }
    if(await this._likesService.doesExist(data.advert, user._id, data.type)) {
      throw new HttpException(
        'This entry already exists',
        HttpStatus.INTERNAL_SERVER_ERROR
      );    
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
