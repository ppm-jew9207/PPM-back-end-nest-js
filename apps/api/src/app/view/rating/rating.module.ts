import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventHandlers } from './handlers';
import { RatingController } from './rating.controller';
import { QueryHandlers } from './queries/handlers';
import { RatingModelModule } from '../../models/rating/rating.module';

@Module({
  imports: [CqrsModule, RatingModelModule],
  controllers: [RatingController],
  providers: [...EventHandlers, ...QueryHandlers],
})
export class RatingViewModule {}
