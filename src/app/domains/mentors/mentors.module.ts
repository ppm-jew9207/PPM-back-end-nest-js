import { Module } from '@nestjs/common';
import { CqrsModule, CommandHandler } from '@nestjs/cqrs';
import { MentorsController } from './mentors.controller';
import { CreateMentorHandler } from './commands/create-mentor.command';

const commandHandlers = [CreateMentorHandler]; 

@Module({
  imports: [CqrsModule, MentorsModule],
  controllers: [MentorsController],
  providers: [...commandHandlers],
})
export class MentorsModule {}