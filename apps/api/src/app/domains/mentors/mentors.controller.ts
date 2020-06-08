import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Controller('mentors')
export class MentorsController {
  constructor(
    private readonly _commandBus: CommandBus,
  ) {}

  @Post()
  getAll(){
    console.log(1)
  }

}