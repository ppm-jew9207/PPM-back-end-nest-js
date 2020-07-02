import {  Controller, Get, Param, UseGuards, UseInterceptors } from '@nestjs/common';
import {  QueryBus } from '@nestjs/cqrs';
import { GetSettingsQuery } from './queries/handlers/get-settings.handler';
import { GetSettingQuery } from './queries/handlers/get-setting.handler';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { PrivateRoutesPath } from '@ppm/common/main';

@Controller(PrivateRoutesPath.SETTINGS)
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class SettingsController {
  constructor(
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.queryBus.execute(new GetSettingsQuery());
  }

  @Get(PrivateRoutesPath.GET_BY_ID)
  async getById(@Param('id') id: string): Promise<any[]> {
    return this.queryBus.execute(new GetSettingQuery({ id }));
  }
}
