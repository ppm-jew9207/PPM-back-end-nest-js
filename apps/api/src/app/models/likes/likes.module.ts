import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LikesModelService } from './likes.service';
import { LikesSchema } from './likes.schema';
import { ViewModels } from '../../helpers/constants';

@Module({
  imports: [MongooseModule.forFeature([{ name: ViewModels.LIKES_VIEW, schema: LikesSchema }])],
  providers: [LikesModelService],
  exports: [LikesModelService]
})
export class LikesModelModule {}