import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { LikeRemoved } from '../../../domains/likes/events/like-removed.event';
import { LikesModelService } from '../../../models/likes/likes.service';
import { Inject } from '@nestjs/common';

@EventsHandler(LikeRemoved)
export class LikeRemovedHandler implements IEventHandler<LikeRemoved> {
  @Inject() private readonly _likesViewService: LikesModelService;

  public handle({id}: LikeRemoved) {
    this._likesViewService.remove(id);
  }
}
