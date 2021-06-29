import {
  Controller,
  Post,
  Body,
  Param,
  UseGuards,
  UseInterceptors,
  Req,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserProfile } from './commands/create-user-profile.command';
import { CreateUserProfilePayloadDto } from '../../models/userProfiles/dto/create-user-profile-payload.dto';
import { DeleteUserProfileCommand } from './commands/delete-user-profile.command';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { UpdateUserProfilePayloadDto } from '../../models/userProfiles/dto/update-user-profile-payload.dto';
import { UpdateUserProfileCommand } from './commands/update-user-profile.command';
import { Request } from 'express';
import { PrivateRoutesPath } from '@ppm/common/main';
import { AddToCourseUserProfileCommand } from './commands/add-to-course-user-profile.command';
import { RemoveFromCourseUserProfileCommand } from './commands/remove-from-course-user-profile.command';

@Controller(PrivateRoutesPath.USER_PROFILES)
@ApiTags(PrivateRoutesPath.USER_PROFILES)
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

  @Post(PrivateRoutesPath.POST_DELETE)
  async delete(@Param('id') id: string) {
    return this._commandBus.execute(new DeleteUserProfileCommand(id));
  }

  @Post(PrivateRoutesPath.POST_UPDATE)
  async update(
    @Param('id') id: string,
    @Body() payload: UpdateUserProfilePayloadDto
  ) {
    return this._commandBus.execute(new UpdateUserProfileCommand(id, payload));
  }
  @Post(PrivateRoutesPath.POST_ADD_STUDENT_TO_COURSE)
  @HttpCode(HttpStatus.OK)
  async addToCourse(
    @Param('courseId') courseId: string,
    @Req() request: Request
  ) {
    const user: any = request.user;
    return this._commandBus.execute(
      new AddToCourseUserProfileCommand(user._id, courseId)
    );
  }
  @Post(PrivateRoutesPath.POST_REMOVE_STUDENT_FROM_COURSE)
  @HttpCode(HttpStatus.OK)
  async removeFromCourse(
    @Param('courseId') courseId: string,
    @Req() request: Request
  ) {
    const user: any = request.user;
    return this._commandBus.execute(
      new RemoveFromCourseUserProfileCommand(user._id, courseId)
    );
  }
}
