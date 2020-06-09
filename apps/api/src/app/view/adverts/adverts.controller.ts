import {  Controller, Get, Param } from '@nestjs/common';
import {  QueryBus } from '@nestjs/cqrs';
import { GetAdvertQuery } from './queries/handlers/get-advert.handler';
import { Types } from 'mongoose';

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
  async getAdvert(@Param('id') id: Types.ObjectId): Promise<any[]> {
    console.log(id);
    return this.queryBus.execute(new GetAdvertQuery({ _id: id }));
  }
}
