import {  Controller, Get, Param } from '@nestjs/common';
import {  QueryBus } from '@nestjs/cqrs';
import { GetSettingsQuery } from './queries/handlers/get-settings.handler';
import { GetSettingQuery } from './queries/handlers/get-setting.handler';

@Controller('settings-view')
export class SettingsController {
  constructor(
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.queryBus.execute(new GetSettingsQuery());
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<any[]> {
    return this.queryBus.execute(new GetSettingQuery({ id }));
  }
}
