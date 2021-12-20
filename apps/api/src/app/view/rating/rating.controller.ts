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
import { RatingViewModel } from '../../models/rating/rating.interface';
import { GetCourseIdQuery } from './queries/handlers/get-courseId.handler';

@Controller(PrivateRoutesPath.RATING)
@ApiTags(PrivateRoutesPath.RATING)
export class RatingController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(`${PrivateRoutesPath.GET_BY_COURSE_ID}`)
  async getAllByCourseId(
    @Param('courseid') courseId: string
  ): Promise<RatingViewModel[]> {
    return this.queryBus.execute(new GetCourseIdQuery(courseId));
  }

  @Get(`${PrivateRoutesPath.GET_BY_COURSE_ID}`)
  async getTotalRating(
    @Param('courseid') courseId: string
  ): Promise<RatingViewModel[]> {
    return this.queryBus.execute(new GetCourseIdQuery(courseId));
  }
}
