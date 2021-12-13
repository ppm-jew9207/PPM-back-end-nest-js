import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ViewModels } from '../../helpers/constants';
import { CreateRatingPayload, RatingViewModel } from './rating.interface';
@Injectable()
export class RatingModelService {
  @InjectModel(ViewModels.RATINGS_VIEW) public model!: Model<RatingViewModel>;

  public async createRating(
    id: string,
    data: CreateRatingPayload
  ): Promise<void> {
    await this.model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
    });
  }

  async getAllByCourse(courseId: string): Promise<RatingViewModel[]> {
    const result = await this.model.aggregate([
      {
        $match: {
          courseId,
        },
      },
    ]);
    // count all results
    return result;
  }

  async getAllByUserId(userId: string): Promise<RatingViewModel[]> {
    const result = await this.model.aggregate([
      {
        $match: {
          user: userId,
        },
      },
    ]);
    // ratingValue missing
    return result;
  }

  async getUserRating(
    userId: string,
    courseId: string
  ): Promise<RatingViewModel[]> {
    const result = await this.model.aggregate([
      {
        $match: {
          courseId,
        },
      },
      {
        $match: {
          user: userId,
        },
      },
    ]);
    // ratingValue missing
    return result;
  }
}
