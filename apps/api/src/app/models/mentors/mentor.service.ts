import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ViewModels } from '../../helpers/constants';
import { MentorViewModel, CreateMentor } from './mentor.interface';
import { UpdateMentor } from '../../domains/mentors/mentors.interface';

@Injectable()
export class MentorModelService {
  @InjectModel(ViewModels.MENTORS) public model!: Model<MentorViewModel>;

  public async createMentor(data: CreateMentor): Promise<void> {
    await this.model.findOneAndUpdate({ }, data, { upsert: true })
  }

  public async update(id: string, data: UpdateMentor): Promise<void> {
    console.log(id);
    console.log(data);
    
    await this.model.findOneAndUpdate({ _id: Types.ObjectId(id) }, {$set: data})
  }

  public async getById(id: string): Promise<MentorViewModel> {
    return this.model.findById({ _id: Types.ObjectId(id) })
  }
}
