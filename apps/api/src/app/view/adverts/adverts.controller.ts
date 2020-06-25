import {  Controller, Get, Param, UseGuards, UseInterceptors } from '@nestjs/common';
import {  QueryBus } from '@nestjs/cqrs';
import { GetAdvertsQuery } from './queries/handlers/get-adverts.handler';
import { GetAdvertQuery } from './queries/handlers/get-advert.handler';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';

@Controller('adverts-view')
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class AdvertsController {
  constructor(
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.queryBus.execute(new GetAdvertsQuery());
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<any[]> {
    return this.queryBus.execute(new GetAdvertQuery({ id }));
  }
}
