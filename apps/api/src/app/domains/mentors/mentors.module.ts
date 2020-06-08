import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MentorsController } from './mentors.controller';

@Module({
  imports: [CqrsModule],
  controllers: [MentorsController],
  providers: [],
})
export class MentorsModule {}