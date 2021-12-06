import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { RatingCreated } from '../../domains/rating/events/rating-created.event';

import { ViewModels } from '../../helpers/constants';
import { RatingViewModel } from './rating.interface';
@Injectable()
export class RatingModelService {
  @InjectModel(ViewModels.RATINGS_VIEW) public model!: Model<RatingViewModel>;

  public async createRating(data: RatingCreated): Promise<void> {
    await this.model.findOneAndUpdate(
      { _id: Types.ObjectId(data._id) },
      data.rating,
      {
        upsert: true,
      }
    );
  }
}
