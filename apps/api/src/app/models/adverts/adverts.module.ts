import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvertsModelService } from './adverts.service';
import { AdvertsSchema } from './adverts.schema';
import { ViewModels } from '../../helpers/constants';

@Module({
  imports: [MongooseModule.forFeature([{ name: ViewModels.ADVERTS_VIEW, schema: AdvertsSchema }])],
  providers: [AdvertsModelService],
  exports: [AdvertsModelService]
})
export class AdvertsModelModule {}