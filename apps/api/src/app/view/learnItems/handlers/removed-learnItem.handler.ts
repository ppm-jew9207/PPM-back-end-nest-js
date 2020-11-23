import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { LearnItemRemoved } from '../../../domains/learnItems/events/learnItem-removed.event';
import { LearnItemsModelService } from '../../../models/learnItems/learnItems.service';
import { Inject } from '@nestjs/common';

@EventsHandler(LearnItemRemoved)
export class LearnItemRemovedHandler implements IEventHandler<LearnItemRemoved> {
  @Inject() private readonly _learnItemsViewService: LearnItemsModelService;

  public handle({ id }: LearnItemRemoved): void {
    this._learnItemsViewService.remove(id);
  }
}
