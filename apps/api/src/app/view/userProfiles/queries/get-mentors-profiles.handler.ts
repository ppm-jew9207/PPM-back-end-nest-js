import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { UserProfileModelService } from '../../../models/userProfiles/user-profile.service';

export class GetMentorsProfilesQuery {
  constructor() {}
}

@QueryHandler(GetMentorsProfilesQuery)
export class GetMentorsProfilesHandler
  implements IQueryHandler<GetMentorsProfilesQuery> {
  @Inject() private readonly _userProfileModelService: UserProfileModelService;
  async execute() {
    return this._userProfileModelService.getMentors();
  }
}
