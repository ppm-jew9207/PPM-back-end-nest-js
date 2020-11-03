import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  Req,
  UseGuards,
} from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { GetLessonsQuery } from "./queries/handlers/get-lessons.handler";
import { GetLessonQuery } from "./queries/handlers/get-lesson.handler";
import { GetUsersLessonsQuery } from "./queries/handlers/get-users-lessons.handler";
import { GetUsersLessonQuery } from "./queries/handlers/get-users-lesson.handler";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { PrivateRoutesPath } from "@ppm/common/main";
import { AuthGuard } from "@nestjs/passport";
import { LoggingInterceptor } from "../../common/interceptors/logging.interceptor";
import { TransformInterceptor } from "../../common/interceptors/transform.interceptor";
import { LessonsViewModel } from '../../models/lessons/lessons.interface';

@Controller(PrivateRoutesPath.LESSONS)
@ApiTags(PrivateRoutesPath.LESSONS)
export class LessonsController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiBearerAuth("JWT")
  @UseGuards(AuthGuard("jwt"))
  @UseInterceptors(LoggingInterceptor, TransformInterceptor)
  @Get(`${PrivateRoutesPath.USER}${PrivateRoutesPath.GET_BY_ID}`)
  async getUsersLessonById(@Param('id') id: string, @Req() request: any): Promise<LessonsViewModel> {
    const user = request.user;
    const userId = user.id;
    return this.queryBus.execute(new GetUsersLessonQuery(userId, id));
  }

  @ApiBearerAuth("JWT")
  @UseGuards(AuthGuard("jwt"))
  @UseInterceptors(LoggingInterceptor, TransformInterceptor)
  @Get(PrivateRoutesPath.USER)
  async getByUserId(@Req() request: any): Promise<LessonsViewModel[]> {
    const user = request.user;
    return this.queryBus.execute(new GetUsersLessonsQuery(user.id));
  }

  @Get(PrivateRoutesPath.GET_BY_ID)
  async getById(@Param('id') id: string): Promise<LessonsViewModel> {
    return this.queryBus.execute(new GetLessonQuery(id));
  }

  @Get()
  async findAll(): Promise<LessonsViewModel[]> {
    return this.queryBus.execute(new GetLessonsQuery());
  }
}
