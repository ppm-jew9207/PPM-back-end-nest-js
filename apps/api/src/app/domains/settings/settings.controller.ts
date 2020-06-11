import { Body, Controller, Post, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateSetting } from './commands/create-setting.command';
import { RemoveSetting } from './commands/remove-setting.command';
import { UpdateSetting } from './commands/update-setting.command';
import { UpdateSettingPayloadDto } from '../../models/settings/dtos/update-setting.dto';
import { CreateSettingPayloadDto } from '../../models/settings/dtos/create-setting.dto';

@Controller('settings-domain')
export class SettingsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async create(@Body() dto: CreateSettingPayloadDto) {
    return this.commandBus.execute(new CreateSetting(dto));
  }

  @Post('/:id/update')
  @HttpCode(HttpStatus.OK)
  async updates(@Param('id') id: string, @Body() updateSettingPayload: UpdateSettingPayloadDto): Promise<Boolean> {
    return this.commandBus.execute(new UpdateSetting({ id, ...updateSettingPayload }));
  }

  @Post('/:id/delete')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    return this.commandBus.execute(new RemoveSetting({ id }));
  }
}
