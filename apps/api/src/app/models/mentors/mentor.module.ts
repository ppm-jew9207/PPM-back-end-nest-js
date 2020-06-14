import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ViewModels } from '../../helpers/constants';
import { MentorSchema } from './mentor.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ViewModels.MENTORS, schema: MentorSchema }])],
  providers: [],
  exports: []
})
export class MentorModelModule { }