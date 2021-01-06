import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';

import { ViewModels } from '../../helpers/constants';
import {
  AdvertsViewModel,
  CreateAdvertPayload,
} from './adverts.interface';
import { UpdateAdvertPayloadDto } from './dtos/update-advert.dto';
import { CATEGORIES_JOIN_QUERY } from '../../shared/mongo-requests';

@Injectable()
export class AdvertsModelService {
  @InjectModel(ViewModels.ADVERTS_VIEW) private _model!: Model<
    AdvertsViewModel
  >;

  async getAll(): Promise<AdvertsViewModel[]> {
    return this._model.aggregate([
      {
        $match:  { _id : {$exists: true}}   
      },
      ...CATEGORIES_JOIN_QUERY
    ]).exec();
  }

  async getById(id: string): Promise<AdvertsViewModel> {
    return this._model.aggregate([
      {
        $match:  { _id: Types.ObjectId(id) },    
      },
      ...CATEGORIES_JOIN_QUERY
    ]).exec();
  }

  async getByUserId(id: string): Promise<AdvertsViewModel[]> {
    return this._model.aggregate([
      {
        $match:  { "creator._id": id },    
      },
      ...CATEGORIES_JOIN_QUERY
    ]).exec();
  }

  async getUsersAdvertById(userId: string, id: string): Promise<AdvertsViewModel> {
    return this._model.aggregate([
      {
        $match:  { "creator._id": userId, _id: Types.ObjectId(id) }   
      },
      ...CATEGORIES_JOIN_QUERY
    ]).exec();
  }

  async create(id: string, data: CreateAdvertPayload) {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async update(data: UpdateAdvertPayloadDto) {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(data.id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async remove(id: string) {
    await this._model.deleteOne({ _id: Types.ObjectId(id) });
  }
}
