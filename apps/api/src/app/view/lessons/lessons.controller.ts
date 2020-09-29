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
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { PrivateRoutesPath } from "@ppm/common/main";
import { AuthGuard } from "@nestjs/passport";
import { LoggingInterceptor } from "../../common/interceptors/logging.interceptor";
import { TransformInterceptor } from "../../common/interceptors/transform.interceptor";

@Controller(PrivateRoutesPath.LESSONS)
@ApiTags(PrivateRoutesPath.LESSONS)
export class LessonsController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(`${PrivateRoutesPath.USER}${PrivateRoutesPath.GET_BY_ID}`)
  async getById(@Param("id") id: string): Promise<any[]> {
    return this.queryBus.execute(new GetUsersLessonsQuery(id));
  }

  @ApiBearerAuth("JWT")
  @UseGuards(AuthGuard("jwt"))
  @UseInterceptors(LoggingInterceptor, TransformInterceptor)
  @Get(PrivateRoutesPath.USER)
  async getByUserId(@Req() request: any): Promise<any> {
    const user = request.user;
    return this.queryBus.execute(new GetLessonQuery(user.id));
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.queryBus.execute(new GetLessonsQuery());
  }
}
