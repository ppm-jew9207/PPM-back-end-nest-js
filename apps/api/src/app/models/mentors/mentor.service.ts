import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ViewModels } from '../../helpers/constants';
import { MentorViewModel, CreateMentor } from './mentor.interface';
import { MentorCreated } from '../../domains/mentors/events/mentor-created.event';

@Injectable()
export class MentorModelService {
  @InjectModel(ViewModels.MENTORS) public model!: Model<MentorViewModel>;

  public async createMentor(data: MentorCreated): Promise<void> {
    await this.model.findOneAndUpdate({ _id: data._id }, data.mentor, { upsert: true })
  }
}
