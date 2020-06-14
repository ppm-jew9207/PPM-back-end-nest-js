import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ViewModels } from '../../helpers/constants';
import { MentorViewModel } from './mentor.interface';

@Injectable()
export class MentorModelService {
  @InjectModel(ViewModels.MENTORS) public model!: Model<MentorViewModel>;

}
