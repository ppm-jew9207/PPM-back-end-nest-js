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
import { CreateLike } from './commands/create-like.command';
import { CreateLikePayloadDto } from '../../models/likes/dto/create-like.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { PrivateRoutesPath, Roles } from '@ppm/common/main';

@Controller(PrivateRoutesPath.LIKES)
@ApiTags(PrivateRoutesPath.LIKES)
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class LikesController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async create(@Body() dto: CreateLikePayloadDto, @Req() request: any) {
      const user = request.user;
      return await this.commandBus.execute(new CreateLike(dto, user));
  }

  // @Post(PrivateRoutesPath.POST_UPDATE)
  // @HttpCode(HttpStatus.OK)
  // async updates(
  //   @Param('id') id: string,
  //   @Body() updateAdvertPayload: UpdateAdvertPayloadDto
  // ): Promise<boolean> {
  //   return this.commandBus.execute(
  //     new UpdateAdvert({ ...updateAdvertPayload, id })
  //   );
  // }

  // @Post(PrivateRoutesPath.POST_DELETE)
  // @HttpCode(HttpStatus.OK)
  // async remove(@Param('id') id: string) {
  //   return this.commandBus.execute(new RemoveAdvert(id));
  // }
}
