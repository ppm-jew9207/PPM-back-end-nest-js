import {
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';

@Controller('permissions-view')
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class PermissionsController {
  constructor(private readonly queryBus: QueryBus) {}
}
