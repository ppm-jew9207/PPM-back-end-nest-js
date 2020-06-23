import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ViewModels } from '../../helpers/constants';
import { StudentViewModel } from './student.interface';
import { StudentCreated } from '../../domains/students/events/student-created.event';
import { StudentUpdated } from '../../domains/students/events/student-updated.event';
import { StudentPayloadDto } from './dto/student-payload.dto';

@Injectable()
export class StudentModelService {
  @InjectModel(ViewModels.STUDENTS) public model!: Model<StudentViewModel>;

  public async create(data: StudentCreated): Promise<void> {
    await this.model.findOneAndUpdate({ _id: Types.ObjectId(data.id) }, data.student, { upsert: true })
  }
  async delete(id: string) {
    await this.model.deleteOne({ _id: Types.ObjectId(id) });
  }
  async update(data: StudentUpdated) {
    await this.model.findOneAndUpdate({ _id: Types.ObjectId(data.id) }, { $set: data.student })
  }
  async getAll(): Promise<StudentPayloadDto[]> {
    return this.model.find().exec()
  }
}
