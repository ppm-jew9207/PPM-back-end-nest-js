import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventHandlers } from './handlers';

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [
    ...EventHandlers,
  ],
})
export class MentorViewModule {}
