import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ViewModels } from '../../helpers/constants';
import { MentorSchema } from './mentor.schema';
import { MentorModelService } from './mentor.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: ViewModels.MENTORS, schema: MentorSchema }])],
  providers: [MentorModelService],
  exports: [MentorModelService]
})
export class MentorModelModule { }