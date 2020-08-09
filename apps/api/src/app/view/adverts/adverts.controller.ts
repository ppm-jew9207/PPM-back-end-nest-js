import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetAdvertsQuery } from './queries/handlers/get-adverts.handler';
import { GetAdvertQuery } from './queries/handlers/get-advert.handler';
import { ApiTags } from '@nestjs/swagger';
import { PrivateRoutesPath } from '@ppm/common/main';

@Controller(PrivateRoutesPath.ADVERTS)
@ApiTags(PrivateRoutesPath.ADVERTS)
export class AdvertsController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(PrivateRoutesPath.GET_BY_ID)
  async getById(@Param('id') id: string): Promise<any> {
    return this.queryBus.execute(new GetAdvertQuery({ id }));
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.queryBus.execute(new GetAdvertsQuery());
  }
}
