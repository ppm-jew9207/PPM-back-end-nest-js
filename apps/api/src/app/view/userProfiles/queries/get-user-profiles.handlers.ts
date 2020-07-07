import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { UserProfileModelService } from '../../../models/userProfiles/user-profile.service';

export class GetUserProfilesQuery {}

@QueryHandler(GetUserProfilesQuery)
export class GetUserProfilesHandler
  implements IQueryHandler<GetUserProfilesQuery> {
  @Inject() private readonly _userProfileModelService: UserProfileModelService;
  async execute() {
    return this._userProfileModelService.getAll();
  }
}
