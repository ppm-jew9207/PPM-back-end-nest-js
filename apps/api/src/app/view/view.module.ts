
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MentorViewModule } from './mentors/mentors.module';
;

@Module({
  imports: [CqrsModule, MentorViewModule],
  controllers: [],
  providers: [
  ],
})
export class ViewModule {}