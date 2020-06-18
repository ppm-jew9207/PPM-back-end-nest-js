import { Body, Controller, Post, Param } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateMentorPayloadDto, UpdateMentorPayloadDto } from './dto/create-mentor-payload.dto';
import { CreateMentor } from './commands/create-mentor.command';
import { UpdateMentorCommand } from './commands/update-mentor-command';

@Controller('mentors')
export class MentorsController {
  constructor(
    private readonly _commandBus: CommandBus,
  ) { }

  @Post()
  async createMentor(@Body() payload: CreateMentorPayloadDto) {
    return this._commandBus.execute(new CreateMentor(payload));
  }

  @Post('/:id/update')
  async update(@Param('id') id: string,  @Body() payload: UpdateMentorPayloadDto) {
    return this._commandBus.execute(new UpdateMentorCommand(id, payload));
  }
}
