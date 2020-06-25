import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MentorsController } from './mentors.controller';
import { CreateMentorHandler } from './commands/create-mentor.command';
import { MentorsService } from './mentors.service';
import { UpdateMentorCommandHandler } from './commands/update-mentor-command';
import { MentorModelModule } from '../../models/mentors/mentor.module';

const CommandHandlers=[CreateMentorHandler, UpdateMentorCommandHandler];

@Module({
  imports: [CqrsModule, MentorModelModule],
  controllers: [MentorsController],
  providers: [...CommandHandlers,MentorsService],
})
export class MentorsModule {}