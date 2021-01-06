import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { LearnItemUpdated } from '../../../domains/learnItems/events/learnItem-updated.event';
import { LearnItemsModelService } from '../../../models/learnItems/learnItems.service';
import { Inject } from '@nestjs/common';

@EventsHandler(LearnItemUpdated)
export class LearnItemUpdatedHandler implements IEventHandler<LearnItemUpdated> {
  @Inject() private readonly _learnItemsViewService: LearnItemsModelService;

  public handle(event: LearnItemUpdated): void {
    this._learnItemsViewService.update(event.learnItem.id, event.learnItem);
  }
}
