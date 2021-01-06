import { LearnItemsAggregate } from '../learnItems.aggregate';
import { Types } from 'mongoose';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreateLearnItemPayloadDto } from '../../../models/learnItems/dtos/create-learnItem.dto';
import { Inject, BadRequestException } from '@nestjs/common';
import { LearnItemCreated } from '../events/learnItem-created.event';
import { LearnItemPayload } from '../../../models/learnItems/learnItems.interface';

export class CreateLearnItem {
  constructor(public data: CreateLearnItemPayloadDto) {}
}
@CommandHandler(CreateLearnItem)
export class CreateLearnItemHandler implements ICommandHandler<CreateLearnItem> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: CreateLearnItem): Promise<boolean> {
    if (!data.title) {
      throw new BadRequestException('Title is required!');
    }

    if (!data.value) {
      throw new BadRequestException('Value is required!');
    }
    const learnItemData: LearnItemPayload = {
      ...data,
    };
    const aggregate = new LearnItemsAggregate();
    const id = new Types.ObjectId().toHexString();
    aggregate.apply(new LearnItemCreated(id, learnItemData));
    const learnItem = this._publisher.mergeObjectContext(aggregate);
    learnItem.commit();

    return true;
  }
}
