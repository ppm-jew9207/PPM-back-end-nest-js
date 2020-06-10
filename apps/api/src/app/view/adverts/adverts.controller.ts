import {  Controller, Get, Param } from '@nestjs/common';
import {  QueryBus } from '@nestjs/cqrs';
import { GetAdvertsQuery } from './queries/handlers/get-adverts.handler';
import { GetAdvertQuery } from './queries/handlers/get-advert.handler';

@Controller('adverts-view')
export class AdvertsController {
  constructor(
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.queryBus.execute(new GetAdvertsQuery());
  }

  @Get('/:id')
  async getAdvert(@Param('id') id: string): Promise<any[]> {
    return this.queryBus.execute(new GetAdvertQuery({ _id: id }));
  }
}
