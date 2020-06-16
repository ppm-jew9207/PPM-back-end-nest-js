import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ViewModels } from '../../helpers/constants';
import { StudentSchema } from './student.schema';
import { StudentModelService } from './student.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: ViewModels.STUDENTS, schema: StudentSchema }])],
  providers: [StudentModelService],
  exports: [StudentModelService]
})
export class StudentModelModule { }