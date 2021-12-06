import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RatingModelService } from './rating.service';
import { RatingSchema } from './rating.schema';
import { ViewModels } from '../../helpers/constants';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ViewModels.RATINGS_VIEW, schema: RatingSchema },
    ]),
  ],
  providers: [RatingModelService],
  exports: [RatingModelService],
})
export class RatingModelModule {}
