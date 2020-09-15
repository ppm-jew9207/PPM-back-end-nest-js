import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { UserProfileModelService } from '../../../models/userProfiles/user-profile.service';

export class GetUserProfileByUserIdQuery {
  constructor(public readonly id: string) {}
}

@QueryHandler(GetUserProfileByUserIdQuery)
export class GetUserProfileByUserIdHandler
  implements IQueryHandler<GetUserProfileByUserIdQuery> {
  @Inject() private readonly _userProfileModelService: UserProfileModelService;
  async execute({ id }) {
    return this._userProfileModelService.getById(id);
  }
}
