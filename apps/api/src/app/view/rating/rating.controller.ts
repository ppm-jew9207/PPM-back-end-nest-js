import {
  Controller,
  Get,
  Param,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { PrivateRoutesPath } from '@ppm/common/main';
import { CreateRatingPayloadDto } from '../../models/rating/dto/create-rating.dto';
import { GetRatingsQuery } from './queries/handlers/get-ratings.handler';

@Controller(PrivateRoutesPath.RATING)
@ApiTags(PrivateRoutesPath.RATING)
export class RatingController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('all')
  async getAll(): Promise<CreateRatingPayloadDto[]> {
    return this.queryBus.execute(new GetRatingsQuery());
  }
}
