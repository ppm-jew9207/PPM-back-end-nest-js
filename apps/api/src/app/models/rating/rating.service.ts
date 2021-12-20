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
    console.log(data, 'prie service');
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

  async getTotalRatings(courseId: string) {
    const result = await this.model.count({ courseId });
    return result;
  }

  async getRatingSumByCourseId(courseId: string, rating: number) {
    const result = await this.model.aggregate([
      {
        $match: {
          courseId,
        },
      },
      {
        $group: {
          _id: '$courseId',
          ratingSum: { $sum: '$rating' },
        },
      },
    ]);
    return result;
  }

  async getUserStarValue(
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

    return result;
  }
}
