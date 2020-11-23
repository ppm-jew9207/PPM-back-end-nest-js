import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { LearnItemCreated } from '../../../domains/learnItems/events/learnItem-created.event';
import { LearnItemsModelService } from '../../../models/learnItems/learnItems.service';
import { Inject } from '@nestjs/common';

@EventsHandler(LearnItemCreated)
export class LearnItemCreatedHandler implements IEventHandler<LearnItemCreated> {
  @Inject() private readonly _learnItemsViewService: LearnItemsModelService;

  public handle({ id, data }: LearnItemCreated): void {
    this._learnItemsViewService.create(id, data);
  }
}
