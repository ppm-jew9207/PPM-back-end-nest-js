import { Body, Controller, Post, Param, ForbiddenException, Req } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateMentor, TestTemplate } from './commands/create-mentor.command';

@Controller('mentors')
export class MentorsController {
  constructor(
    private readonly _commandBus: CommandBus,
  ) {}

  @Post()
  async createMentor(@Body() test: TestTemplate) {
    console.log('controller : ' + test);
    return this._commandBus.execute(new CreateMentor(test));
  }
}
