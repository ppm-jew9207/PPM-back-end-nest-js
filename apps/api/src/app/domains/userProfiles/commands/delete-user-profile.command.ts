import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { UserProfileAggregate } from '../user-profiles.aggregate';
import { UserProfileDeleted } from '../events/user-profile-deleted.event';

export class DeleteUserProfileCommand {
  constructor(public id: string) {}
}
@CommandHandler(DeleteUserProfileCommand)
export class DeleteUserProfileHandler
  implements ICommandHandler<DeleteUserProfileCommand> {
  @Inject() private readonly _publisher: EventPublisher;
  async execute({ id }: DeleteUserProfileCommand) {
    const aggregate = new UserProfileAggregate();
    aggregate.apply(new UserProfileDeleted(id));

    const userProfile = this._publisher.mergeObjectContext(aggregate);
    userProfile.commit();
    return null;
  }
}
