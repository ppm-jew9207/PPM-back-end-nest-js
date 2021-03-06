import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { LikesController } from './likes.controller';
import { CoursesModelModule } from '../../models/courses/courses.module';
import { LikesModelModule } from '../../models/likes/likes.module';
import { CreateLikeHandler } from './commands/create-like.command';
import { RemoveLikeHandler } from './commands/remove-like.command';
import { UsersModelModule } from '../../models/users/users.module';

const commandHandlers = [
  CreateLikeHandler,
  RemoveLikeHandler,
];

@Module({
  imports: [
    CqrsModule,
    CoursesModelModule,
    UsersModelModule,
    LikesModelModule
  ],
  controllers: [LikesController],
  providers: [...commandHandlers],
})
export class LikesDomainModule {}
