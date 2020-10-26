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
import { GetUsersAdvertQuery } from './queries/handlers/get-users-advert.handler';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { PrivateRoutesPath } from '@ppm/common/main';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { AdvertsViewModel } from '../../models/adverts/adverts.interface';

@Controller(PrivateRoutesPath.ADVERTS)
@ApiTags(PrivateRoutesPath.ADVERTS)
export class AdvertsController {
  constructor(private readonly queryBus: QueryBus) {}


  @ApiBearerAuth('JWT')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(LoggingInterceptor, TransformInterceptor)
  @Get(`${PrivateRoutesPath.USER}${PrivateRoutesPath.GET_BY_ID}`)
  async getUsersAdvertById(@Param('id') id: string, @Req() request: any): Promise<AdvertsViewModel[]> {
    const user = request.user;
    const userId = user.id;
    return this.queryBus.execute(new GetUsersAdvertQuery(userId, id));
  }

  @ApiBearerAuth('JWT')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(LoggingInterceptor, TransformInterceptor)
  @Get(PrivateRoutesPath.USER)
  async getByUserId(@Req() request: any): Promise<AdvertsViewModel> {
    const user = request.user;
    return this.queryBus.execute(new GetAdvertQuery(user.id));
  }

  @Get(`${PrivateRoutesPath.GET_BY_ID}`)
  async getById(@Param('id') id: string): Promise<AdvertsViewModel> {
    return this.queryBus.execute(new GetAdvertQuery(id));
  }

  @Get()
  async findAll(): Promise<AdvertsViewModel[]> {
    return this.queryBus.execute(new GetAdvertsQuery());
  }
}
