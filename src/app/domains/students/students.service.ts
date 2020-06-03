import { Injectable } from '@nestjs/common';
import { Student } from 'src/app/common/interfaces/student.interface';
import { CreateStudentDto, UpdateStudentDto } from 'src/app/common/dto/student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ViewModels } from '../../helpers/constants';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(ViewModels.STUDENT) private _model: Model<Student>
  ) {}

  async createStudent(createStudentDto: CreateStudentDto): Promise<Boolean>  {
    const { photo, name, surname, city, phone, description } = createStudentDto;
    await this._model.findOneAndUpdate(
      { name },
      {
        photo, 
        name, 
        surname, 
        city, 
        phone,
        description
      },
      { upsert: true, new: true }
    );
    return true;
  }

  async updateStudent(id: string, createStudentDto: UpdateStudentDto): Promise<Student>  {
    const { photo, name, surname, city, phone, description } = createStudentDto;

    return this._model.findOneAndUpdate(
      { _id: id },
      {
        photo, 
        name, 
        surname, 
        city, 
        phone,
        description
      },
      { upsert: true, new: true }
    );
  }

  async removeStudent(id: string): Promise<Boolean>  {
    await this._model.findOneAndDelete(
      { _id: id},
      (err) => {
        if(err) console.log(err);
        console.log("Successful deletion");
      }
    );
    return true;
  }
}
