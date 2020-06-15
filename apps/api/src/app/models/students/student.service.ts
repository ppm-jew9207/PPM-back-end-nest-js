import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ViewModels } from '../../helpers/constants';
import { StudentViewModel } from './student.interface';

@Injectable()
export class StudentModelService {
  @InjectModel(ViewModels.STUDENTS) public model!: Model<StudentViewModel>;

  public async createStudent(data: string): Promise<void> {
    return null
  }
}
