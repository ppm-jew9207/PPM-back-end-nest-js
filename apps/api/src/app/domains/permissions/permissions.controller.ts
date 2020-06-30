import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
  UseInterceptors,
  Req,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreatePermission } from './commands/create-permission.command';
import { RemovePermission } from './commands/remove-permission.command';
import { UpdatePermission } from './commands/update-permission.command';
import { CreatePermissionPayloadDto } from '../../models/permissions/dtos/create-permission.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';

@Controller('permissions-domain')
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class PermissionsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async create(@Body() dto: CreatePermissionPayloadDto, @Req() request: any) {
    return this.commandBus.execute(new CreatePermission(dto));
  }

  @Post('/:id/update')
  @HttpCode(HttpStatus.OK)
  async updates(
    @Param('id') id: string,
    @Body() role: string
  ): Promise<boolean> {
    return this.commandBus.execute(new UpdatePermission(id, role));
  }

  @Post('/:id/delete')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    return this.commandBus.execute(new RemovePermission(id));
  }
}