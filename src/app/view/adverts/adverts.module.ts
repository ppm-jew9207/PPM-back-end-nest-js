import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvertsController } from './adverts.controller';
import { AdvertsService } from './adverts.service';
import { AdvertSchema } from 'src/app/helpers/schemas/advert.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Advert', schema: AdvertSchema }])],
  controllers: [AdvertsController],
  providers: [AdvertsService]
})
export class AdvertsModule {}
