import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  Req,
  UseGuards,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
// import { GetLikesQuery } from './queries/handlers/get-likes.handler';
// import { GetLikeQuery } from './queries/handlers/get-like.handler';
// import { GetUsersLikeQuery } from './queries/handlers/get-users-like.handler';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { PrivateRoutesPath } from '@ppm/common/main';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { LikesViewModel } from '../../models/Likes/Likes.interface';
// import { GetUsersLikesQuery } from './queries/handlers/get-users-likes.handler';

@Controller(PrivateRoutesPath.LIKES)
@ApiTags(PrivateRoutesPath.LIKES)
export class LikesController {
  constructor(private readonly queryBus: QueryBus) {}


  @ApiBearerAuth('JWT')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(LoggingInterceptor, TransformInterceptor)
  @Get(`${PrivateRoutesPath.USER}${PrivateRoutesPath.GET_BY_ID}`)
  async getUsersLikeById(@Param('id') id: string, @Req() request: any): Promise<LikesViewModel[]> {
    const user = request.user;
    const userId = user.id;
    return this.queryBus.execute(new GetUsersLikeQuery(userId, id));
  }

  @ApiBearerAuth('JWT')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(LoggingInterceptor, TransformInterceptor)
  @Get(PrivateRoutesPath.USER)
  async getByUserId(@Req() request: any): Promise<LikesViewModel> {
    const user = request.user;
    return this.queryBus.execute(new GetUsersLikesQuery(user.id));
  }

  @Get(`${PrivateRoutesPath.GET_BY_ID}`)
  async getById(@Param('id') id: string): Promise<LikesViewModel> {
    return this.queryBus.execute(new GetLikeQuery(id));
  }

  @Get()
  async findAll(): Promise<LikesViewModel[]> {
    return this.queryBus.execute(new GetLikesQuery());
  }
}
