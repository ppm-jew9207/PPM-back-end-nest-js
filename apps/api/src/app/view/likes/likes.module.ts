import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventHandlers } from './handlers';
import { LikesController } from './likes.controller';
import { QueryHandlers } from './queries/handlers';
import { LikesModelModule } from '../../models/likes/likes.module';

@Module({
  imports: [CqrsModule, LikesModelModule],
  controllers: [LikesController],
  providers: [
    ...EventHandlers,
    ...QueryHandlers,
  ],
})
export class LikesViewModule {}
