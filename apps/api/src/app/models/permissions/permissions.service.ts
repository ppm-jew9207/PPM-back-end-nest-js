import { Injectable, Type } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';

import { ViewModels } from '../../helpers/constants';
import {
  PermissionsViewModel,
  CreatePermissionPayload,
  RemovePermissionPayload,
  UpdatePermissionPayload,
} from './permissions.interface';

@Injectable()
export class PermissionsModelService {
  @InjectModel(ViewModels.PERMISSIONS_VIEW) private _model!: Model<
    PermissionsViewModel
  >;

  async getAll(): Promise<PermissionsViewModel[]> {
    return this._model.find().exec();
  }

  async getById(id: string): Promise<PermissionsViewModel[]> {
    return this._model.find({ _id: Types.ObjectId(id) }).exec();
  }

  async create(id: string, data: CreatePermissionPayload) {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async update(id: string, data: UpdatePermissionPayload) {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async remove({ id }: RemovePermissionPayload) {
    await this._model.deleteOne({ _id: Types.ObjectId(id) });
  }
}
