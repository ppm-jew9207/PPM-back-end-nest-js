import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateMentor } from './commands/create-mentor.command';
import { CreateMentorPayloadDto } from '../../models/mentors/dto/create-mentor-payload.dto';

@Controller('mentors')
export class MentorsController {
  constructor(
    private readonly _commandBus: CommandBus,
  ) { }

  @Post()
  async createMentor(@Body() payload: CreateMentorPayloadDto) {
    return this._commandBus.execute(new CreateMentor(payload));
  }
}
