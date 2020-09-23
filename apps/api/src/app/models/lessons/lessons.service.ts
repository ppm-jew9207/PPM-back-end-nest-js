import { Injectable, Type } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';

import { ViewModels } from '../../helpers/constants';
import {
  LessonsViewModel,
  CreateLessonPayload,
  LessonPayload,
} from './lessons.interface';

@Injectable()
export class LessonsModelService {
  @InjectModel(ViewModels.LESSONS_VIEW) private _model!: Model<
    LessonsViewModel
  >;

  async getAll(): Promise<LessonsViewModel[]> {
    return this._model.find().exec();
  }

  async getByUserId(id: string): Promise<LessonsViewModel[]> {
    return this._model.find({ 'creator._id': id }).exec();
  }

  async getById(id: string): Promise<LessonsViewModel> {
    return this._model.findOne({ _id: Types.ObjectId(id) }).exec();
  }

  async create(id: string, data: CreateLessonPayload) {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async update(id: string, data: LessonPayload) {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async remove(id: string) {
    await this._model.deleteOne({ _id: Types.ObjectId(id) });
  }
}
