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
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PrivateRoutesPath, Roles } from '@ppm/common/main';
import { isValidObjectId } from 'mongoose';
import { ResponseError } from '../../common/dto/response.dto';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { CreateRatingPayloadDto } from '../../models/rating/dto/create-rating.dto';
import { CreateRating } from './commands/create-rating.command';

@Controller(PrivateRoutesPath.RATING)
@ApiTags(PrivateRoutesPath.RATING)
@ApiBearerAuth('JWT')
// @UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class RatingController {
  constructor(public readonly commandBus: CommandBus) {}

  @Post()
  async create(@Body() dto: CreateRatingPayloadDto, @Req() request: any) {
    if (!isValidObjectId(dto.courseId)) {
      return new ResponseError('RATING.ERROR', 'Incorrect course ID');
    }
    try {
      return await this.commandBus.execute(new CreateRating(dto));
    } catch (error) {
      return new ResponseError('RATING.ERROR', error);
    }
  }
}
