import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { UserProfileModelService } from '../../../models/userProfiles/user-profile.service';
import { CreateUserProfilePayloadDto } from '../../../models/userProfiles/dto/create-user-profile-payload.dto';

export class GetUserProfileByIdQuery {
  constructor(public id: string) {}
}

@QueryHandler(GetUserProfileByIdQuery)
export class GetUserProfileByIdHandler
  implements IQueryHandler<GetUserProfileByIdQuery> {
  @Inject() private readonly _userProfileModelService: UserProfileModelService;
  async execute({ id }): Promise<CreateUserProfilePayloadDto> {
    return this._userProfileModelService.getById(id);
  }
}
