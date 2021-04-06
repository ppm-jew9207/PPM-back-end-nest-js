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
    return result;
  }

  async remove(id: string) {
    await this._model.deleteOne({ _id: Types.ObjectId(id) });
  }

  
  async getAllByAdvert(advertId: string): Promise<LikesViewModel[]> {
    const result = await this._model.find(
      {
        advert: advertId
      });
    return result;
  }

  async getAllLikesByAdvert(advertId: string): Promise<LikesViewModel[]> {
    const result = await this._model.find(
      {
        advert: advertId,
        type: "like" as unknown as likeType
      });
    return result;
  }

  async getAllSharesByAdvert(advertId: string): Promise<LikesViewModel[]> {
    const result = await this._model.find(
      {
        advert: advertId,
        type: "share" as unknown as likeType
      });
    return result;
  }


}
