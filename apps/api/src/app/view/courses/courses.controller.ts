import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  Req,
  UseGuards,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetCoursesQuery } from './queries/handlers/get-courses.handler';
import { GetCourseQuery } from './queries/handlers/get-course.handler';
import { GetUsersCourseQuery } from './queries/handlers/get-users-course.handler';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { PrivateRoutesPath } from '@ppm/common/main';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { CoursesViewModel } from '../../models/courses/courses.interface';
import { GetUsersCoursesQuery } from './queries/handlers/get-users-courses.handler';

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
    return this.queryBus.execute(new GetUsersCoursesQuery(user.id));
  }

  @Get(`${PrivateRoutesPath.GET_BY_ID}`)
  async getById(@Param('id') id: string): Promise<CoursesViewModel> {
    return this.queryBus.execute(new GetCourseQuery(id));
  }

  @Get()
  async findAll(): Promise<CoursesViewModel[]> {
    return this.queryBus.execute(new GetCoursesQuery());
  }
}
