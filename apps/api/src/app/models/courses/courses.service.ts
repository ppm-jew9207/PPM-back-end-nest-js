import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';
import { ViewModels } from '../../helpers/constants';
import { CoursesViewModel, CreateCoursePayload } from './courses.interface';
import { UpdateCoursePayloadDto } from './dtos/update-course.dto';
import {
  CATEGORIES_JOIN_QUERY,
  LEARN_ITEMS_JOIN_QUERY,
  LESSONS_JOIN_QUERY,
  LIKES_JOIN_QUERY,
  COURSES_ID_QUERY,
} from '../../shared/mongo-queries';
import {
  searchParams,
  filterParams,
} from '../../view/courses/courses.controller';
@Injectable()
export class CoursesModelService {
  filter(params: any): CoursesViewModel[] | PromiseLike<CoursesViewModel[]> {
    throw new Error('Method not implemented.');
  }
  @InjectModel(ViewModels.COURSES_VIEW) private _model!: Model<
    CoursesViewModel
  >;

  perPage: number = 25;
  page: number = 1;

  async getAll(params: searchParams): Promise<CoursesViewModel[]> {
    let result = this._model.aggregate([
      {
        $match: { _id: { $exists: true } },
      },
      CATEGORIES_JOIN_QUERY,
      LEARN_ITEMS_JOIN_QUERY,
      LESSONS_JOIN_QUERY,
      COURSES_ID_QUERY,
      LIKES_JOIN_QUERY,
    ]);

    if (String(params.returnCount) === 'true') {
      return result.count('count').exec();
    }

    if (params.perPage) {
      this.perPage = parseInt(params.perPage);
    }
    if (params.page) {
      this.page = parseInt(params.page);
    }
    return result
      .skip(this.perPage * (this.page - 1))
      .limit(this.perPage)
      .exec();
  }

  async getById(id: string): Promise<CoursesViewModel[]> {
    return this._model
      .aggregate([
        {
          $match: { _id: Types.ObjectId(id) },
        },
        CATEGORIES_JOIN_QUERY,
        LEARN_ITEMS_JOIN_QUERY,
        LESSONS_JOIN_QUERY,
        COURSES_ID_QUERY,
        LIKES_JOIN_QUERY,
      ])
      .exec();
  }

  async getByUserId(params: {
    id: string;
    page?: string;
    perPage?: string;
    returnCount?: boolean;
  }): Promise<CoursesViewModel[]> {
    let result = this._model.aggregate([
      {
        $match: { 'creator._id': params.id },
      },
      CATEGORIES_JOIN_QUERY,
      LEARN_ITEMS_JOIN_QUERY,
      LESSONS_JOIN_QUERY,
      COURSES_ID_QUERY,
      LIKES_JOIN_QUERY,
    ]);

    if (String(params.returnCount) === 'true') {
      return result.count('count').exec();
    }

    if (params.perPage) {
      this.perPage = parseInt(params.perPage);
    }
    if (params.page) {
      this.page = parseInt(params.page);
    }

    return result
      .skip(this.perPage * (this.page - 1))
      .limit(this.perPage)
      .exec();
  }

  async getUsersCourseById(
    userId: string,
    id: string,
    page?: string,
    perPage?: string
  ): Promise<CoursesViewModel> {
    if (perPage) {
      this.perPage = parseInt(perPage);
    }
    if (page) {
      this.page = parseInt(page);
    }

    return this._model
      .aggregate([
        {
          $match: { 'creator._id': userId, _id: Types.ObjectId(id) },
        },
        CATEGORIES_JOIN_QUERY,
        LEARN_ITEMS_JOIN_QUERY,
        LESSONS_JOIN_QUERY,
        COURSES_ID_QUERY,
        LIKES_JOIN_QUERY,
      ])
      .exec()
      .skip(this.perPage * (this.page - 1))
      .limit(this.perPage);
  }

  async create(id: string, data: CreateCoursePayload) {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async update(data: UpdateCoursePayloadDto) {
    await this._model.findOneAndUpdate({ _id: Types.ObjectId(data.id) }, data, {
      upsert: true,
      new: true,
    });
  }

  async remove(id: string) {
    await this._model.deleteOne({ _id: Types.ObjectId(id) });
  }

  async search(params: searchParams) {
    /* Search parameters */
    const searchQuery = {
      $or: [
        {
          title: new RegExp(params.search, 'i'),
        },
        {
          description: new RegExp(params.search, 'i'),
        },
      ],
    };
    const regex = new RegExp(params.search, 'i');

    /* Filtering parameters
    categories, learnItems*/
    let categories,
      learnItems = [];
    let searchQueryCategories = {};
    let searchQueryLearnItems = {};
    if (params.categories) {
      categories = params.categories.split(',');
      searchQueryCategories = {
        categories: { $in: categories },
      };
    }
    if (params.learnItems) {
      learnItems = params.learnItems.split(',');
      searchQueryLearnItems = {
        learnItems: { $in: learnItems },
      };
    }

    let result = this._model.aggregate([
      { $match: searchQuery },
      { $match: searchQueryCategories },
      { $match: searchQueryLearnItems },
      CATEGORIES_JOIN_QUERY,
      LEARN_ITEMS_JOIN_QUERY,
      LESSONS_JOIN_QUERY,
      COURSES_ID_QUERY,
      LIKES_JOIN_QUERY,
    ]);

    if (String(params.returnCount) === 'true') {
      return result.count('count').exec();
    }

    if (params.perPage) {
      this.perPage = parseInt(params.perPage);
    }
    if (params.page) {
      this.page = parseInt(params.page);
    }

    return result.skip(this.perPage * (this.page - 1)).limit(this.perPage);
  }
}
