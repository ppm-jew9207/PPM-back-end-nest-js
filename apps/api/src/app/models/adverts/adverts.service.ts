import { Injectable, Type } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';

import { ViewModels } from '../../helpers/constants';
import {
  AdvertPayload,
  AdvertsViewModel,
  CreateAdvertPayload,
} from './adverts.interface';

@Injectable()
export class AdvertsModelService {
  @InjectModel(ViewModels.ADVERTS_VIEW) private _model!: Model<
    AdvertsViewModel
  >;

  async getAll(): Promise<AdvertsViewModel[]> {
    return this._model.find().exec();
  }

  async getById(id: string): Promise<AdvertsViewModel> {
    return this._model.findOne({ _id: Types.ObjectId(id) }).exec();
  }

  async getByUserId(id: string): Promise<AdvertsViewModel[]> {
    return this._model.find({ 'creator._id': Types.ObjectId(id) }).exec();
  }

  async getUsersAdvertById(userId: string, id: string): Promise<AdvertsViewModel> {
    return this._model.findOne({ 'creator._id': Types.ObjectId(userId),  _id: Types.ObjectId(id) }).exec();
  }

  async create(id: string, data: CreateAdvertPayload) {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async update(id: string, data: AdvertPayload) {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async remove({ id }) {
    await this._model.deleteOne({ _id: Types.ObjectId(id) });
  }
}
