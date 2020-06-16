import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ViewModels } from '../../helpers/constants';
import { StudentViewModel } from './student.interface';
import { StudentCreated } from '../../domains/students/events/student-created.event';
import { DeleteStudentPayloadDto } from '../../domains/students/dto/delete-student-payload.dto';

@Injectable()
export class StudentModelService {
  @InjectModel(ViewModels.STUDENTS) public model!: Model<StudentViewModel>;

  public async create(data: StudentCreated): Promise<void> {
    console.log('model-service');
    await this.model.findOneAndUpdate({ _id: Types.ObjectId(data.id) }, data.student, { upsert: true })
  }

  async delete({ id }: DeleteStudentPayloadDto) {
    await this.model.deleteOne({ _id: id });
  }
}
