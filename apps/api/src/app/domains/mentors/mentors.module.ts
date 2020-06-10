import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MentorsController } from './mentors.controller';
import { CreateMentorHandler } from './commands/create-mentor.command';
import { MentorsService } from './mentors.service';

const CommandHandlers=[CreateMentorHandler];

@Module({
  imports: [CqrsModule],
  controllers: [MentorsController],
  providers: [...CommandHandlers,MentorsService],
})
export class MentorsModule {}