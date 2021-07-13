import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  Req,
  UseGuards,
  Query,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetCoursesQuery } from './queries/handlers/get-courses.handler';
import { GetCourseQuery } from './queries/handlers/get-course.handler';
import { SearchCoursesQuery } from './queries/handlers/search-courses.handler';
import { GetUsersCourseQuery } from './queries/handlers/get-users-course.handler';
import { ApiTags, ApiBearerAuth, ApiPropertyOptional } from '@nestjs/swagger';
import { PrivateRoutesPath } from '@ppm/common/main';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { CoursesViewModel } from '../../models/courses/courses.interface';

class searchParams {
  @ApiPropertyOptional()
    search: string;
}
@Controller(PrivateRoutesPath.COURSES)
@ApiTags(PrivateRoutesPath.COURSES)
export class CoursesController {
  constructor(private readonly queryBus: QueryBus) {}


  @ApiBearerAuth('JWT')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(LoggingInterceptor, TransformInterceptor)
  @Get(`${PrivateRoutesPath.USER}${PrivateRoutesPath.GET_BY_ID}`)
  async getUsersCourseById(@Param('id') id: string, @Req() request: any): Promise<CoursesViewModel[]> {
    const user = request.user;
    const userId = user.id;
    return this.queryBus.execute(new GetUsersCourseQuery(userId, id));
  }

  @ApiBearerAuth('JWT')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(LoggingInterceptor, TransformInterceptor)
  @Get(PrivateRoutesPath.USER)
  async getByUserId(@Req() request: any): Promise<CoursesViewModel> {
    const user = request.user;
    return this.queryBus.execute(new GetUsersCourseQuery(user.id, user.id));
  }

  @Get(`${PrivateRoutesPath.GET_BY_ID}`)
  async getById(@Param('id') id: string): Promise<CoursesViewModel> {
    return this.queryBus.execute(new GetCourseQuery(id));
  }

  @Get()
  async findAll(@Query() params: searchParams): Promise<CoursesViewModel[]> {
    if(!params.search)
      return this.queryBus.execute(new GetCoursesQuery());
    return this.queryBus.execute(new SearchCoursesQuery(params.search));
  }
}

