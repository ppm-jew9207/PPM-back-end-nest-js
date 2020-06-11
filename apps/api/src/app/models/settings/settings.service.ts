import { Injectable, Type } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';

import { ViewModels } from '../../helpers/constants';
import { SettingsViewModel, CreateSettingPayload, RemoveSettingPayload, UpdateSettingPayload } from './settings.interface';

@Injectable()
export class SettingsModelService  {
  @InjectModel(ViewModels.SETTINGS_VIEW) private _model!: Model<SettingsViewModel>;

  async getAll(): Promise<SettingsViewModel[]> {
    return this._model.find().exec();
  }

  async getById(id: string): Promise<SettingsViewModel[]> {
    return this._model.find({ _id: Types.ObjectId(id) }).exec();
  }

  async create(id: string, data: CreateSettingPayload) {
    await this._model.findOneAndUpdate(
      { _id: Types.ObjectId(id) },
      { ...data },
      { upsert: true, new: true },
    );
  }

  async update(id: string, data: UpdateSettingPayload) {
    await this._model.findOneAndUpdate(
      { _id: Types.ObjectId(id) },
      { ...data },
      { upsert: true, new: true },
    );
  }

  async remove({ id }: RemoveSettingPayload) {
    await this._model.deleteOne(
      { _id: Types.ObjectId(id) }
    );
  }  
}
