import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventHandlers } from './handlers';
import { AdvertsController } from './adverts.controller';
import { QueryHandlers } from './queries/handlers';
import { AdvertsModelModule } from '../../models/adverts/adverts.module';

@Module({
  imports: [CqrsModule, AdvertsModelModule],
  controllers: [AdvertsController],
  providers: [
    ...EventHandlers,
    ...QueryHandlers,
  ],
})
export class AdvertsViewModule {}
