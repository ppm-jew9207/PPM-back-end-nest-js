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
import { GetUsersCourseQuery } from './queries/handlers/get-users-courses.handler';
import { FilterCoursesQuery } from './queries/handlers/filter-courses.handler';
import {
  ApiTags,
  ApiBearerAuth,
  ApiPropertyOptional,
  ApiOperation,
} from '@nestjs/swagger';
import { PrivateRoutesPath } from '@ppm/common/main';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { CoursesViewModel } from '../../models/courses/courses.interface';

export class searchParams {
  @ApiPropertyOptional()
  search: string;
  @ApiPropertyOptional()
  page: string;
  @ApiPropertyOptional()
  perPage: string;
  @ApiPropertyOptional()
  returnCount: boolean;
  @ApiPropertyOptional()
  categories: string;
  @ApiPropertyOptional()
  learnItems: string;
}

export class filterParams {
  @ApiPropertyOptional()
  categories: string;
  @ApiPropertyOptional()
  learnItems: string;
  @ApiPropertyOptional()
  page: string;
  @ApiPropertyOptional()
  perPage: string;
  @ApiPropertyOptional()
  returnCount: boolean;
}

class byUserIdParams {
  @ApiPropertyOptional()
  page: string;
  @ApiPropertyOptional()
  perPage: string;
  @ApiPropertyOptional()
  returnCount: boolean;
}
@Controller(PrivateRoutesPath.COURSES)
@ApiTags(PrivateRoutesPath.COURSES)
export class CoursesController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiBearerAuth('JWT')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(LoggingInterceptor, TransformInterceptor)
  @Get(`${PrivateRoutesPath.USER}${PrivateRoutesPath.GET_BY_ID}`)
  async getUsersCourseById(
    @Param('id') id: string,
    @Query() params: byUserIdParams,
    @Req() request: any
  ): Promise<CoursesViewModel[]> {
    return this.queryBus.execute(
      new GetUsersCourseQuery({
        id: id,
        page: params.page,
        perPage: params.perPage,
        returnCount: params.returnCount,
      })
    );
  }

  @ApiBearerAuth('JWT')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(LoggingInterceptor, TransformInterceptor)
  @Get(PrivateRoutesPath.USER)
  async getByUserId(
    @Req() request: any,
    @Query() params: byUserIdParams
  ): Promise<CoursesViewModel> {
    const user = request.user;
    return this.queryBus.execute(
      new GetUsersCourseQuery({
        id: user.id,
        page: params.page,
        perPage: params.perPage,
        returnCount: params.returnCount,
      })
    );
  }

  @Get(`${PrivateRoutesPath.GET_BY_ID}`)
  async getById(@Param('id') id: string): Promise<CoursesViewModel> {
    return this.queryBus.execute(new GetCourseQuery(id));
  }

  @Get()
  @ApiOperation({
    summary:
      'You can filter courses by categories or learn Items. Use IDs. To provide multiple use comma for it, e.g.: (12345,12365). Search finds records in title and description',
  })
  async findAll(@Query() params: searchParams): Promise<CoursesViewModel[]> {
    if (!params.search)
      return this.queryBus.execute(new GetCoursesQuery(params));
    return this.queryBus.execute(new SearchCoursesQuery(params));
  }
}
