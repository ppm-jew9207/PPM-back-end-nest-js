import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { UserProfileModelService } from '../../../models/userProfiles/user-profile.service';

export class GetUserProfileByEmailQuery {
  constructor(public email: string) {}
}

@QueryHandler(GetUserProfileByEmailQuery)
export class GetUserProfileByEmailHandler
  implements IQueryHandler<GetUserProfileByEmailQuery> {
  @Inject() private readonly _userProfileModelService: UserProfileModelService;
  async execute({ email }) {
    return this._userProfileModelService.getByEmail(email);
  }
}
