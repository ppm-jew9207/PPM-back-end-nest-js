import { LearnItemsAggregate } from '../learnItems.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { LearnItemRemoved } from '../events/learnItem-removed.event';

export class RemoveLearnItem {
  constructor(public readonly id: string) {}
}

@CommandHandler(RemoveLearnItem)
export class RemoveLearnItemHandler implements ICommandHandler<RemoveLearnItem> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ id }: RemoveLearnItem): Promise<Boolean> {
    const aggregate = new LearnItemsAggregate();
    aggregate.apply(new LearnItemRemoved(id));

    const learnItem = this._publisher.mergeObjectContext(aggregate);
    learnItem.commit();

    return true;
  }
}
