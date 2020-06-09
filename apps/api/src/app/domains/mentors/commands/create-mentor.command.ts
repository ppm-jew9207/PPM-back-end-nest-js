import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';

export class CreateMentor {
  constructor(public data: TestTemplate) {
  }
};

export class TestTemplate {
  public title: string;
  public description: string
};

@CommandHandler(CreateMentor)
export class CreateMentorHandler implements ICommandHandler<CreateMentor> {

  async execute({ data }: CreateMentor) {
    console.log('command :' + JSON.stringify(data));
    return data
  }
} 