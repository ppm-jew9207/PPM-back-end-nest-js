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

  async getAdvert(id: string): Promise<AdvertsViewModel[]> {
    return this._model.find({ _id: Types.ObjectId(id) }).exec();
  }

  async createAdvert(advert: CreateAdvertPayload) {
    await this._model.findOneAndUpdate(
      { _id: advert._id },
      { ...advert },
      { upsert: true, new: true },
    );
  }

  async updateAdvert(id: string, advert: UpdateAdvertPayload) {
    await this._model.findOneAndUpdate(
      { _id: Types.ObjectId(id) },
      { ...advert },
      { upsert: true, new: true },
    );
  }

  async removeAdvert({ id }: RemoveAdvertPayload) {
    await this._model.deleteOne(
      { _id: Types.ObjectId(id) }
    );
  }  
}
