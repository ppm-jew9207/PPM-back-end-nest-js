import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MentorsController } from './mentors.controller';
import { CreateMentorHandler } from './commands/create-mentor.command';

const CommandHandlers=[CreateMentorHandler];

@Module({
  imports: [CqrsModule],
  controllers: [MentorsController],
  providers: [...CommandHandlers],
})
export class MentorsModule {}