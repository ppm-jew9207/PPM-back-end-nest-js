
import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';

export class CreateMentor {
  constructor(
    public data: string,
  ) {}
};

@CommandHandler(CreateMentor)
export class CreateMentorHandler implements ICommandHandler<CreateMentor> {

  async execute(data) {
    return data;
  }
}