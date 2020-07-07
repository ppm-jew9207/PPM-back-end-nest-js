import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { UserProfileCreated } from '../../../domains/userProfiles/events/user-profile-created.event';
import { UserProfileModelService } from '../../../models/userProfiles/user-profile.service';

@EventsHandler(UserProfileCreated)
export class UserProfileCreatedHandler
  implements IEventHandler<UserProfileCreated> {
  @Inject() private readonly _userProfileModelService: UserProfileModelService;
  public async handle(event: UserProfileCreated) {
    await this._userProfileModelService.create(event);
    return null;
  }
}
