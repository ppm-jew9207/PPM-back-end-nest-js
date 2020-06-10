import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateMentorPayloadDto } from '../dto/create-mentor-payload.dto';

export class CreateMentor {
  constructor(public data: CreateMentorPayloadDto) {
  }
};

@CommandHandler(CreateMentor)
export class CreateMentorHandler implements ICommandHandler<CreateMentor> {

  async execute({ data }: CreateMentor) {
    
    return data
  }
} 