import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { UpdateUserProfilePayloadDto } from '../../../models/userProfiles/dto/update-user-profile-payload.dto';
import { UserProfileAggregate } from '../user-profiles.aggregate';
import { UserProfileUpdated } from '../events/user-profile-updated.event';

export class UpdateUserProfileCommand {
  constructor(public id: string, public payload: UpdateUserProfilePayloadDto) {}
}
@CommandHandler(UpdateUserProfileCommand)
export class UpdateUserProfileHandler
  implements ICommandHandler<UpdateUserProfileCommand> {
  @Inject() private readonly _publisher: EventPublisher;
  async execute({ id, payload }: UpdateUserProfileCommand) {
    const aggregate = new UserProfileAggregate();
    aggregate.apply(new UserProfileUpdated(id, payload));

    const userProfile = this._publisher.mergeObjectContext(aggregate);
    userProfile.commit();

    return null;
  }
}
