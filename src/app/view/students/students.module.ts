import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsController } from './Students.controller';
import { StudentsService } from './Students.service';
import { StudentSchema } from 'src/app/helpers/schemas/student.schema';
import { ViewModels } from 'src/app/helpers/constants';

@Module({
  imports: [MongooseModule.forFeature([{ name: ViewModels.STUDENT, schema: StudentSchema }])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
