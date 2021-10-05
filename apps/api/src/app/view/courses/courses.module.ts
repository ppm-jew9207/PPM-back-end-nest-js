import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventHandlers } from './handlers';
import { CoursesController } from './courses.controller';
import { QueryHandlers } from './queries/handlers';
import { CoursesModelModule } from '../../models/courses/courses.module';

@Module({
  imports: [CqrsModule, CoursesModelModule],
  controllers: [CoursesController],
  providers: [
    ...EventHandlers,
    ...QueryHandlers,
  ],
})
export class CoursesViewModule {}
