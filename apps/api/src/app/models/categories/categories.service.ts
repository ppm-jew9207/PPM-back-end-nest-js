import { Injectable, Type } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';

import { ViewModels } from '../../helpers/constants';
import {
  CategoriesViewModel,
  CategoryPayload,
} from './categories.interface';

@Injectable()
export class CategoriesModelService {
  @InjectModel(ViewModels.CATEGORIES_VIEW) private _model!: Model<
    CategoriesViewModel
  >;

  async getAll(): Promise<CategoriesViewModel[]> {
    return this._model.find().exec();
  }

  async getById(id: string): Promise<CategoriesViewModel> {
    return this._model.findOne({ _id: Types.ObjectId(id) }).exec();
  }

  async create(id: string, data: CategoryPayload): Promise<void> {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async update(id: string, data: CategoryPayload): Promise<void> {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async remove(id: string): Promise<void> {
    await this._model.deleteOne({ _id: Types.ObjectId(id) });
  }
}
