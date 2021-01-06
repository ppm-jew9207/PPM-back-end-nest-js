import { Injectable, Type } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';

import { ViewModels } from '../../helpers/constants';
import {
  LearnItemsViewModel, 
  LearnItemPayload,
} from './learnItems.interface';

@Injectable()
export class LearnItemsModelService {
  @InjectModel(ViewModels.LEARN_ITEMS_VIEW) private _model!: Model<
    LearnItemsViewModel
  >;

  async getAll(): Promise<LearnItemsViewModel[]> {
    return this._model.find().exec();
  }

  async getById(id: string): Promise<LearnItemsViewModel> {
    return this._model.findOne({ _id: Types.ObjectId(id) }).exec();
  }

  async create(id: string, data: LearnItemPayload): Promise<void> {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async update(id: string, data: LearnItemPayload): Promise<void> {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async remove(id: string): Promise<void> {
    await this._model.deleteOne({ _id: Types.ObjectId(id) });
  }
}
