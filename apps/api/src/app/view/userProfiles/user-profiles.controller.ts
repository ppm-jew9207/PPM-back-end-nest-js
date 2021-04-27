import {
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
  Param,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { QueryBus } from '@nestjs/cqrs';
import { GetUserProfileByIdQuery } from './queries/get-user-profile-by-id.handler';
import { GetUserProfileByEmailQuery } from './queries/get-user-profile-by-email.handler';
import { GetMentorsProfilesQuery } from './queries/get-mentors-profiles.handler';
import { UserProfilePayloadDto } from '../../models/userProfiles/dto/user-profile-payload.dto';
import { GetUserProfileByUserIdQuery } from './queries/get-user-profile-by-user-id.handler';
import { PrivateRoutesPath } from '@ppm/common/main';

@Controller(PrivateRoutesPath.USER_PROFILES)
@ApiTags(PrivateRoutesPath.USER_PROFILES)
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class UserProfilesController {
  constructor(private readonly _queryBus: QueryBus) {}

  @Get()
  @Get(PrivateRoutesPath.USER)
  async getByUserId(@Req() request: any): Promise<UserProfilePayloadDto> {
    const user = request.user;
    return this._queryBus.execute(new GetUserProfileByUserIdQuery(user.id));
  }

  @Get('/mentors')
  async getMentors() {
    return this._queryBus.execute(new GetMentorsProfilesQuery());
  }

  @Get(PrivateRoutesPath.GET_BY_ID)
  async getById(@Param('id') id: string): Promise<UserProfilePayloadDto> {
    return this._queryBus.execute(new GetUserProfileByIdQuery(id));
  }

  @Get('/:email/find-by-email')
  async getByEmail(@Param('email') email: string) {
    return this._queryBus.execute(new GetUserProfileByEmailQuery(email));
  }
}
