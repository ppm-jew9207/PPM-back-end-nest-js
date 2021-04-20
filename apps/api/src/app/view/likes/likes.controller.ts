import {
  Controller, Get, Param, Req, UseGuards, UseInterceptors
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PrivateRoutesPath } from '@ppm/common/main';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { LikesViewModel } from '../../models/likes/likes.interface';
import { GetLikesQuery } from './queries/handlers/get-likes.handler';
import { GetLikesLikeQuery } from './queries/handlers/get-likeslike.handler';
import { GetLikesShareQuery } from './queries/handlers/get-likesshare.handler';

@Controller(PrivateRoutesPath.LIKES)
@ApiTags(PrivateRoutesPath.LIKES)
export class LikesController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiBearerAuth("JWT")
  @UseGuards(AuthGuard("jwt"))
  @UseInterceptors(LoggingInterceptor, TransformInterceptor)
  @Get(`${PrivateRoutesPath.GET_BY_ADVERT_ID}`)
  async getAllByCourseId(@Param('courseid') courseId: string): Promise<LikesViewModel[]> {
    return this.queryBus.execute(new GetLikesQuery(courseId));
  }

  @ApiBearerAuth("JWT")
  @UseGuards(AuthGuard("jwt"))
  @UseInterceptors(LoggingInterceptor, TransformInterceptor)
  @Get(`${PrivateRoutesPath.LIKES}${PrivateRoutesPath.GET_BY_ADVERT_ID}`)
  async getLikesByCourseId(@Param('courseid') courseId: string): Promise<LikesViewModel[]> {
    return this.queryBus.execute(new GetLikesLikeQuery(courseId));
  }

  
  @ApiBearerAuth("JWT")
  @UseGuards(AuthGuard("jwt"))
  @UseInterceptors(LoggingInterceptor, TransformInterceptor)
  @Get(`${PrivateRoutesPath.SHARES}${PrivateRoutesPath.GET_BY_ADVERT_ID}`)
  async getSharesByCourseId(@Param('courseid') courseId: string): Promise<LikesViewModel[]> {
    return this.queryBus.execute(new GetLikesShareQuery(courseId));
  }
}


