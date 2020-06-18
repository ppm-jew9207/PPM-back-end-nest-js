import { Body, Controller, Post, Param, UseGuards, UseInterceptors, Req } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateMentor } from './commands/create-mentor.command';
import { UpdateMentorCommand } from './commands/update-mentor-command';
import { CreateMentorPayloadDto, UpdateMentorPayloadDto } from '../../models/mentors/dto/create-mentor-payload.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { Request } from 'express';

@Controller('mentors')
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class MentorsController {
  constructor(
    private readonly _commandBus: CommandBus,
  ) { }

  @Post()
  async createMentor(@Body() payload: CreateMentorPayloadDto, @Req() request: Request ) {
    const user: any = request.user;
    
    return this._commandBus.execute(new CreateMentor(user._id, payload));
  }

  @Post('/:id/update')
  async update(@Param('id') id: string, @Body() payload: UpdateMentorPayloadDto) {
    return this._commandBus.execute(new UpdateMentorCommand(id, payload));
  }
}
