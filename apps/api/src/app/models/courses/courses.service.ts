import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';
import { filterParams } from '../../view/courses/queries/handlers/filter-courses.handler';
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

@Injectable()
export class CoursesModelService {
  @InjectModel(ViewModels.COURSES_VIEW) private _model!: Model<
    CoursesViewModel
  >;

  async getAll(): Promise<CoursesViewModel[]> {
    return this._model
      .aggregate([
        {
          $match: { _id: { $exists: true } },
        },
        CATEGORIES_JOIN_QUERY,
        LEARN_ITEMS_JOIN_QUERY,
        LESSONS_JOIN_QUERY,
        COURSES_ID_QUERY,
        LIKES_JOIN_QUERY,
      ])
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

  async getByUserId(id: string): Promise<CoursesViewModel[]> {
    return this._model
      .aggregate([
        {
          $match: { 'creator._id': id },
        },
        CATEGORIES_JOIN_QUERY,
        LEARN_ITEMS_JOIN_QUERY,
        LESSONS_JOIN_QUERY,
        COURSES_ID_QUERY,
        LIKES_JOIN_QUERY,
      ])
      .exec();
  }

  async getUsersCourseById(
    userId: string,
    id: string
  ): Promise<CoursesViewModel> {
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
      .exec();
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

  async search(query: string) {
    const searchQuery = {
      $or: [
        {
          title: new RegExp(query, 'i'),
        },
        {
          description: new RegExp(query, 'i'),
        },
      ],
    };
    const regex = new RegExp(query, 'i');
    return this._model.aggregate([
      { $match: searchQuery },
      CATEGORIES_JOIN_QUERY,
      LEARN_ITEMS_JOIN_QUERY,
      LESSONS_JOIN_QUERY,
      COURSES_ID_QUERY,
      LIKES_JOIN_QUERY,
    ]);
  }

  async filter(params: filterParams) {
    let categories,
      learnItems = [];
    let searchQueryCategories,
      searchQueryLearnItems = {};
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

    return this._model.aggregate([
      { $match: searchQueryCategories },
      { $match: searchQueryLearnItems },
      CATEGORIES_JOIN_QUERY,
      LEARN_ITEMS_JOIN_QUERY,
      LESSONS_JOIN_QUERY,
      COURSES_ID_QUERY,
      LIKES_JOIN_QUERY,
    ]);
  }
}
