import { Body, Controller, Post, HttpCode, HttpStatus, Param, UseGuards, UseInterceptors, Req } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateAdvert } from './commands/create-advert.command';
import { RemoveAdvert } from './commands/remove-advert.command';
import { UpdateAdvert } from './commands/update-advert.command';
import { UpdateAdvertPayloadDto } from '../../models/adverts/dtos/update-advert.dto';
import { CreateAdvertPayloadDto } from '../../models/adverts/dtos/create-advert.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { PrivateRoutesPath } from '@ppm/common/main';

@Controller(PrivateRoutesPath.ADVERTS)
@ApiTags(PrivateRoutesPath.ADVERTS)
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class AdvertsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async create(@Body() dto: CreateAdvertPayloadDto, @Req() request: any) {
    const user = request.user;
    return this.commandBus.execute(new CreateAdvert(dto, user));
  }

  @Post(PrivateRoutesPath.POST_UPDATE)
  @HttpCode(HttpStatus.OK)
  async updates(@Param('id') id: string, @Body() updateAdvertPayload: UpdateAdvertPayloadDto): Promise<boolean> {
    return this.commandBus.execute(new UpdateAdvert({ id, ...updateAdvertPayload }));
  }

  @Post(PrivateRoutesPath.POST_DELETE)
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    return this.commandBus.execute(new RemoveAdvert({ id }));
  }
}
