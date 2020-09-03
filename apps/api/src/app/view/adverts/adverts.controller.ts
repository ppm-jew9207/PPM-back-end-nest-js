import { Controller, Get, Param, UseInterceptors, Req } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetAdvertsQuery } from './queries/handlers/get-adverts.handler';
import { GetAdvertQuery } from './queries/handlers/get-advert.handler';
import { GetUsersAdvertsQuery } from './queries/handlers/get-users-adverts.handler';
import { ApiTags } from '@nestjs/swagger';
import { PrivateRoutesPath } from '@ppm/common/main';

@Controller(PrivateRoutesPath.ADVERTS)
@ApiTags(PrivateRoutesPath.ADVERTS)
export class AdvertsController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(PrivateRoutesPath.USER + PrivateRoutesPath.GET_BY_ID)
  async getByUserId(
    @Param('id') id: string,
    @Req() request: any
  ): Promise<any[]> {
    const user = request.user;
    return this.queryBus.execute(new GetUsersAdvertsQuery(id || user.id));
  }

  @Get(PrivateRoutesPath.GET_BY_ID)
  async getById(@Param('id') id: string): Promise<any> {
    return this.queryBus.execute(new GetAdvertQuery(id));
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.queryBus.execute(new GetAdvertsQuery());
  }
}
