import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  Req,
  UseGuards,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetAdvertsQuery } from './queries/handlers/get-adverts.handler';
import { GetAdvertQuery } from './queries/handlers/get-advert.handler';
import { GetUsersAdvertsQuery } from './queries/handlers/get-users-adverts.handler';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { PrivateRoutesPath } from '@ppm/common/main';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';

@Controller(PrivateRoutesPath.ADVERTS)
@ApiTags(PrivateRoutesPath.ADVERTS)
export class AdvertsController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(PrivateRoutesPath.USER + PrivateRoutesPath.GET_BY_ID)
  async getById(@Param('id') id: string): Promise<any[]> {
    return this.queryBus.execute(new GetUsersAdvertsQuery(id));
  }

  @ApiBearerAuth('JWT')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(LoggingInterceptor, TransformInterceptor)
  @Get(PrivateRoutesPath.USER)
  async getByUserId(@Req() request: any): Promise<any> {
    const user = request.user;
    return this.queryBus.execute(new GetAdvertQuery(user.id));
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.queryBus.execute(new GetAdvertsQuery());
  }
}
