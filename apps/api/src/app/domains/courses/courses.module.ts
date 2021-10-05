import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CoursesController } from './courses.controller';

import { CoursesModelModule } from '../../models/courses/courses.module';
import { RemoveCourseHandler } from './commands/remove-course.command';
import { CreateCourseHandler } from './commands/create-course.command';
import { UpdateCourseHandler } from './commands/update-course.command';
import { UsersModelModule } from '../../models/users/users.module';
import { UserProfileModelModule } from '../../models/userProfiles/user-profile.module';

const commandHandlers = [
  CreateCourseHandler,
  RemoveCourseHandler,
  UpdateCourseHandler,
];

@Module({
  imports: [
    CqrsModule,
    CoursesModelModule,
    UsersModelModule,
    UserProfileModelModule,
  ],
  controllers: [CoursesController],
  providers: [...commandHandlers],
})
export class CoursesDomainModule {}
