import { Injectable } from '@nestjs/common';
import { Advert } from 'src/app/common/interfaces/advert.interface';
import { InjectModel } from '@nestjs/mongoose';
import { ViewModels } from '../../helpers/constants';
import { Model } from 'mongoose';

@Injectable()
export class AdvertsService {
  constructor(
    @InjectModel(ViewModels.ADVERT) private _model: Model<Advert>
  ) {}

  async getAdverts(): Promise<Advert[]>  {
    return this._model.find().exec();
  }
}
