import { Injectable, Type } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';

import { ViewModels } from '../../helpers/constants';
import { AdvertsViewModel, CreateAdvertPayload, RemoveAdvertPayload, UpdateAdvertPayload } from './adverts.interface';

@Injectable()
export class AdvertsModelService  {
  @InjectModel(ViewModels.ADVERTS_VIEW) private _model!: Model<AdvertsViewModel>;

  async getAllAdverts(): Promise<AdvertsViewModel[]> {
    return this._model.find().exec();
  }

  async getAdvert(_id: string): Promise<AdvertsViewModel[]> {
    return this._model.find({ _id: Types.ObjectId(_id) }).exec();
  }

  async createAdvert(_id: string, advert: CreateAdvertPayload) {
    await this._model.findOneAndUpdate(
      { _id: Types.ObjectId(_id) },
      { ...advert },
      { upsert: true, new: true },
    );
  }

  async updateAdvert(_id: string, advert: UpdateAdvertPayload) {
    await this._model.findOneAndUpdate(
      { _id: Types.ObjectId(_id) },
      { ...advert },
      { upsert: true, new: true },
    );
  }

  async removeAdvert({ _id }: RemoveAdvertPayload) {
    await this._model.deleteOne(
      { _id: Types.ObjectId(_id) }
    );
  }  
}
