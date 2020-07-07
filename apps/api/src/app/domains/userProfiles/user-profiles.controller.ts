import {
  Controller,
  Post,
  Body,
  Param,
  UseGuards,
  UseInterceptors,
  Req,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserProfile } from './commands/create-user-profile.command';
import { CreateUserProfilePayloadDto } from '../../models/userProfiles/dto/create-user-profile-payload.dto';
import { DeleteUserProfileCommand } from './commands/delete-user-profile.command';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { UpdateUserProfilePayloadDto } from '../../models/userProfiles/dto/update-user-profile-payload.dto';
import { UpdateUserProfileCommand } from './commands/update-user-profile.command';
import { Request } from 'express';
import { PrivateRoutesPath } from '@ppm/common/main';

@Controller('user-profiles-domain')
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class UserProfilesController {
  constructor(private readonly _commandBus: CommandBus) {}

  @Post()
  async create(
    @Body() payload: CreateUserProfilePayloadDto,
    @Req() request: Request
  ) {
    const user: any = request.user;
    return this._commandBus.execute(new CreateUserProfile(user._id, payload));
  }

  @Post(':id/delete')
  async delete(@Param('id') id: string) {
    return this._commandBus.execute(new DeleteUserProfileCommand(id));
  }

  @Post(':id/update')
  async update(
    @Param('id') id: string,
    @Body() payload: UpdateUserProfilePayloadDto
  ) {
    return this._commandBus.execute(new UpdateUserProfileCommand(id, payload));
  }
}
