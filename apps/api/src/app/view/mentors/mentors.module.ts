import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventHandlers } from './handlers';
import { MentorModelModule } from '../../models/mentors/mentor.module';

@Module({
  imports: [CqrsModule, MentorModelModule],
  controllers: [],
  providers: [
    ...EventHandlers,
  ],
})
export class MentorViewModule { }
