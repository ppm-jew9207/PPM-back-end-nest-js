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

  async getAdvert(_id: Types.ObjectId): Promise<AdvertsViewModel[]> {
    return this._model.find({ _id }).exec();
  }

  async createAdvert(_id: Types.ObjectId, advert: CreateAdvertPayload) {
    await this._model.findOneAndUpdate(
      { _id },
      { ...advert, _id },
      { upsert: true, new: true },
    ).then( res => {
      console.log(res);
    });
  }

  async updateAdvert(_id: Types.ObjectId, advert: UpdateAdvertPayload) {
    await this._model.findOneAndUpdate(
      { _id },
      { ...advert },
      { upsert: true, new: true },
    ).then( res => {
      console.log(res);
    });
  }

  async removeAdvert(advert: RemoveAdvertPayload) {
    await this._model.findOneAndDelete(
      { _id: advert._id },
      (err) => {
        if(err) console.log(err);
        console.log("Successful deletion");
      }
    );
  }  
}
