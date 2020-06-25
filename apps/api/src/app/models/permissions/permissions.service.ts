import { Injectable, Type } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';

import { ViewModels } from '../../helpers/constants';
import {
  PermissionsViewModel,
  CreatePermissionPayload,
} from './permissions.interface';

@Injectable()
export class PermissionsModelService {
  @InjectModel(ViewModels.PERMISSIONS_VIEW) public model!: Model<
    PermissionsViewModel
  >;

  async getAll(): Promise<PermissionsViewModel[]> {
    return this.model.find().exec();
  }

  async getById(id: string): Promise<PermissionsViewModel[]> {
    return this.model.find({ _id: Types.ObjectId(id) }).exec();
  }

  async create(id: string, data: CreatePermissionPayload) {
    await this.model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async update(id: string, role: string) {
    await this.model.findOneAndUpdate(
      { _id: Types.ObjectId(id) },
      { role },
      {
        upsert: true,
        new: true,
      }
    );
  }

  async remove(id: string) {
    await this.model.deleteOne({ _id: Types.ObjectId(id) });
  }
}
