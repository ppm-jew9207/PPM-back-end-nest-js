
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { AdvertsController } from './adverts.controller';

import { AdvertsModelModule } from '../../models/adverts/adverts.module';
import { RemoveAdvertHandler } from './commands/remove-advert.command';
import { CreateAdvertHandler } from './commands/create-advert.command';
import { UpdateAdvertHandler } from './commands/update-advert.command';
import { UsersModelModule } from '../../models/users/users.module';

const commandHandlers = [CreateAdvertHandler, RemoveAdvertHandler, UpdateAdvertHandler];

@Module({
  imports: [CqrsModule, AdvertsModelModule, UsersModelModule],
  controllers: [AdvertsController],
  providers: [...commandHandlers],
})
export class AdvertsDomainModule {}