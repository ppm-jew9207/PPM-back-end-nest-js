import { LikesAggregate } from '../likes.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { LikeRemoved } from '../events/like-removed.event';

export class RemoveLike {
  constructor(public id: string) {}
}

@CommandHandler(RemoveLike)
export class RemoveLikeHandler implements ICommandHandler<RemoveLike> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ id }: RemoveLike): Promise<boolean> {
    const aggregate = new LikesAggregate();
    aggregate.apply(new LikeRemoved(id));

    const like = this._publisher.mergeObjectContext(aggregate);
    like.commit();

    return true;
  }
}
