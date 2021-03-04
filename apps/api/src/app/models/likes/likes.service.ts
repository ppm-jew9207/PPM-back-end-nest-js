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

  async doesExist(advert: string, user: string, type: likeType) {
    const result = await this._model.find(
      {
        advert: advert, 
        user: user, 
        type: type
      });
    if (!result.length) {
      return false;
    }
    return true;
  }
}
