import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { UserProfileModelService } from '../../../models/userProfiles/user-profile.service';
import { UserProfileUpdated } from '../../../domains/userProfiles/events/user-profile-updated.event';

@EventsHandler(UserProfileUpdated)
export class UserProfileUpdatedHandler
  implements IEventHandler<UserProfileUpdated> {
  @Inject() private readonly _userProfileModelService: UserProfileModelService;
  public async handle(event: UserProfileUpdated) {
    await this._userProfileModelService.update(event);
  }
}
