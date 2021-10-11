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
import { CreateCourse } from './commands/create-course.command';
import { RemoveCourse } from './commands/remove-course.command';
import { UpdateCourse } from './commands/update-course.command';
import { UpdateCoursePayloadDto } from '../../models/courses/dtos/update-course.dto';
import { CreateCoursePayloadDto } from '../../models/courses/dtos/create-course.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { PrivateRoutesPath, Roles } from '@ppm/common/main';

@Controller(PrivateRoutesPath.COURSES)
@ApiTags(PrivateRoutesPath.COURSES)
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class CoursesController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async create(@Body() dto: CreateCoursePayloadDto, @Req() request: any) {
    const user = request.user;    
    return this.commandBus.execute(new CreateCourse(dto, user));
  }

  @Post(PrivateRoutesPath.POST_UPDATE)
  @HttpCode(HttpStatus.OK)
  async updates(
    @Param('id') id: string,
    @Body() updateCoursePayload: UpdateCoursePayloadDto
  ): Promise<boolean> {
    return this.commandBus.execute(
      new UpdateCourse({ ...updateCoursePayload, id })
    );
  }

  @Post(PrivateRoutesPath.POST_DELETE)
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    return this.commandBus.execute(new RemoveCourse(id));
  }
}
