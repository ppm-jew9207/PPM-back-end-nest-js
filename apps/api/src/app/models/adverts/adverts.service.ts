import { Injectable, Type } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';

import { ViewModels } from '../../helpers/constants';
import {
  AdvertsViewModel,
  CreateAdvertPayload,
  RemoveAdvertPayload,
  UpdateAdvertPayload,
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

  async create(id: string, data: CreateAdvertPayload) {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async update(id: string, data: UpdateAdvertPayload) {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async remove({ id }: RemoveAdvertPayload) {
    await this._model.deleteOne({ _id: Types.ObjectId(id) });
  }
}
