import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateMentorPayloadDto } from './dto/create-mentor-payload.dto';
import { CreateMentor } from './commands/create-mentor.command';
import { MentorsService } from './mentors.service';

@Controller('mentors')
export class MentorsController {
  constructor(
    private readonly _commandBus: CommandBus,
    private readonly _mentorsService: MentorsService,
  ) { }

  @Post()
  async createMentor(@Body() payload: CreateMentorPayloadDto) {
    return this._commandBus.execute(new CreateMentor(payload));
  }
}
