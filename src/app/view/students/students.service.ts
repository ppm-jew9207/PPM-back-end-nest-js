import { Injectable } from '@nestjs/common';
import { Student } from 'src/app/common/interfaces/student.interface';
import { InjectModel } from '@nestjs/mongoose';
import { ViewModels } from '../../helpers/constants';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(ViewModels.STUDENT) private _model: Model<Student>
  ) {}

  async getStudents(): Promise<Student[]>  {
    return this._model.find().exec();
  }

  async getStudentById(id: string): Promise<Student>  {
    return this._model.find({ _id: id }).exec();
  }
}

