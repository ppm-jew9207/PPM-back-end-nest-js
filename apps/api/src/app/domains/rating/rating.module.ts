import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { RatingController } from './rating.controller';
import { CoursesModelModule } from '../../models/courses/courses.module';
import { RatingModelModule } from '../../models/rating/rating.module';
import { UsersModelModule } from '../../models/users/users.module';
import { CreateRatingHandler } from './commands/create-rating.command';

const commandHandlers = [CreateRatingHandler];

@Module({
  imports: [
    CqrsModule,
    CoursesModelModule,
    UsersModelModule,
    RatingModelModule,
  ],
  controllers: [RatingController],
  providers: [...commandHandlers],
})
export class RatingDomainModule {}
