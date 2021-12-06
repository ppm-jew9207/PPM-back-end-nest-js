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
import { ApiTags } from '@nestjs/swagger';
import { PrivateRoutesPath, Roles } from '@ppm/common/main';
import { CreateRatingPayloadDto } from '../../models/rating/dto/create-rating.dto';
import { CreateRating } from './commands/create-rating.command';

@Controller(PrivateRoutesPath.RATING)
@ApiTags(PrivateRoutesPath.RATING)
// @ApiTags(PrivateRoutesPath.RATING)
// @ApiBearerAuth('JWT')
// @UseGuards(AuthGuard('jwt'))
// @UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class RatingController {
  constructor(private readonly _commandBus: CommandBus) {}

  @Post()
  async create(@Body() dto: CreateRatingPayloadDto) {
    // console.log(dto, 'domainController');
    return await this._commandBus.execute(new CreateRating(dto));
  }
}
