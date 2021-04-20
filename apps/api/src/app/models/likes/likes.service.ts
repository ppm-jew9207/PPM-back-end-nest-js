import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { ViewModels } from '../../helpers/constants';
import {
  LikesViewModel,
  CreateLikePayload,
  likeType,
} from './likes.interface';
@Injectable()
export class LikesModelService {
  @InjectModel(ViewModels.LIKES_VIEW) private _model!: Model<
    LikesViewModel
  >

  async create(id: string, data: CreateLikePayload) {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async doesExist(course: string, user: string, type: likeType) {
    const result = await this._model.find(
      {
        course: course, 
        user: user, 
        type: type
      });
    if (!result.length) {
      return false;
    }
    return result;
  }

  async remove(id: string) {
    await this._model.deleteOne({ _id: Types.ObjectId(id) });
  }

  
  async getAllByCourse(courseId: string): Promise<LikesViewModel[]> {
    const result = await this._model.find(
      {
        course: courseId
      });
    return result;
  }

  async getAllLikesByCourse(courseId: string): Promise<LikesViewModel[]> {
    const result = await this._model.find(
      {
        course: courseId,
        type: "like" as unknown as likeType
      });
    return result;
  }

  async getAllSharesByCourse(courseId: string): Promise<LikesViewModel[]> {
    const result = await this._model.find(
      {
        course: courseId,
        type: "share" as unknown as likeType
      });
    return result;
  }


}
