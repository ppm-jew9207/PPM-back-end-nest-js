import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { LikesController } from './likes.controller';
import { AdvertsModelModule } from '../../models/adverts/adverts.module';
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
    AdvertsModelModule,
    UsersModelModule,
    LikesModelModule
  ],
  controllers: [LikesController],
  providers: [...commandHandlers],
})
export class LikesDomainModule {}
