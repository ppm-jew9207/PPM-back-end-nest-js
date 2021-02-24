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
}
