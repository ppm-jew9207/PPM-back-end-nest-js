import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesModelService } from './courses.service';
import { CoursesSchema } from './courses.schema';
import { ViewModels } from '../../helpers/constants';

@Module({
  imports: [MongooseModule.forFeature([{ name: ViewModels.ADVERTS_VIEW, schema: CoursesSchema }])],
  providers: [CoursesModelService],
  exports: [CoursesModelService]
})
export class CoursesModelModule {}