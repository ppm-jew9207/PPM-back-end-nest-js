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
import { CreateLesson } from './commands/create-lesson.command';
import { RemoveLesson } from './commands/remove-lesson.command';
import { UpdateLesson } from './commands/update-lesson.command';
import { UpdateLessonPayloadDto } from '../../models/lessons/dtos/update-lesson.dto';
import { CreateLessonPayloadDto } from '../../models/lessons/dtos/create-lesson.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { PrivateRoutesPath, Roles } from '@ppm/common/main';

@Controller(PrivateRoutesPath.LESSONS)
@ApiTags(PrivateRoutesPath.LESSONS)
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class LessonsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async create(@Body() dto: CreateLessonPayloadDto, @Req() request: any) {
    const user = request.user;
    return this.commandBus.execute(new CreateLesson(dto, user));
  }

  @Post(PrivateRoutesPath.POST_UPDATE)
  @HttpCode(HttpStatus.OK)
  async updates(
    @Param('id') id: string,
    @Body() updateLessonPayload: UpdateLessonPayloadDto
  ): Promise<boolean> {
    return this.commandBus.execute(
      new UpdateLesson({ ...updateLessonPayload, id })
    );
  }

  @Post(PrivateRoutesPath.POST_DELETE)
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    return this.commandBus.execute(new RemoveLesson(id));
  }
}
