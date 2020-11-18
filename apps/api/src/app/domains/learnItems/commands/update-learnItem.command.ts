import { LearnItemsAggregate } from '../learnItems.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { LearnItemUpdated } from '../events/learnItem-updated.event';
import { UpdateLearnItemPayloadDto } from '../../../models/learnItems/dtos/update-learnItem.dto';

export class UpdateLearnItem {
  constructor(public data: UpdateLearnItemPayloadDto) {}
}

@CommandHandler(UpdateLearnItem)
export class UpdateLearnItemHandler implements ICommandHandler<UpdateLearnItem> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: UpdateLearnItem): Promise<Boolean> {
    const aggregate = new LearnItemsAggregate();
    aggregate.apply(new LearnItemUpdated(data));

    const learnItem = this._publisher.mergeObjectContext(aggregate);
    learnItem.commit();

    return true;
  }
}
