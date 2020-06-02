import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvertsController } from './adverts.controller';
import { AdvertsService } from './adverts.service';
import { AdvertSchema } from 'src/app/helpers/schemas/advert.schema';
import { ViewModels } from 'src/app/helpers/constants';

@Module({
  imports: [MongooseModule.forFeature([{ name: ViewModels.ADVERT, schema: AdvertSchema }])],
  controllers: [AdvertsController],
  providers: [AdvertsService]
})
export class AdvertsModule {}
