import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { LikeCreated } from '../../../domains/likes/events/like-created.event';
import { LikesModelService } from '../../../models/likes/likes.service';
import { Inject } from '@nestjs/common';

@EventsHandler(LikeCreated)
export class LikeCreatedHandler implements IEventHandler<LikeCreated> {
  @Inject() private readonly _likesViewService: LikesModelService;

  public handle({ id, data }: LikeCreated) {
    this._likesViewService.create(id, data);
  }
}
