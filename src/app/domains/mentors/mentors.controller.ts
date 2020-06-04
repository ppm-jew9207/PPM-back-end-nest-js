import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateMentor } from './commands/create-mentor.command';

@Controller('mentors')
export class MentorsController {
  constructor(
    private readonly _commandBus: CommandBus,
  ) {}

  @Post()
  async getAll() {
    const val='hello';
    return this._commandBus.execute(new CreateMentor(val))
  }
}