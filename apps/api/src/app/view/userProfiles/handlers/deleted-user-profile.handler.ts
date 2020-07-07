import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { UserProfileModelService } from '../../../models/userProfiles/user-profile.service';
import { UserProfileDeleted } from '../../../domains/userProfiles/events/user-profile-deleted.event';

@EventsHandler(UserProfileDeleted)
export class UserProfileDeletedHandler
  implements IEventHandler<UserProfileDeleted> {
  @Inject() private readonly _userProfileModelService: UserProfileModelService;
  public async handle(event: UserProfileDeleted) {
    await this._userProfileModelService.delete(event.userProfile);
    return null;
  }
}
