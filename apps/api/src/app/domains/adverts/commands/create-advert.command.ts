import { AdvertsAggregate } from '../adverts.aggregate';
import { Types } from 'mongoose';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreateAdvertPayloadDto } from '../../../models/adverts/dtos/create-advert.dto';
import { Inject, BadRequestException } from '@nestjs/common';
import { AdvertCreated } from '../events/advert-created.event';

export class CreateAdvert {
  constructor(public data: CreateAdvertPayloadDto) {}
}
@CommandHandler(CreateAdvert)
export class CreateAdvertHandler implements ICommandHandler<CreateAdvert> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: CreateAdvert) {

    if (!data.title) {
      throw new BadRequestException('Title is required!');
    }

    const aggregate = new AdvertsAggregate();
    aggregate.apply(new AdvertCreated({_id: new Types.ObjectId(), ...data}));
    const advert = this._publisher.mergeObjectContext(aggregate);
    advert.commit();

    return null;
  }
}
