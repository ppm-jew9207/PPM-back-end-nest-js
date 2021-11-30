import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ViewModels } from '../../helpers/constants';
import { UserProfileViewModel } from './user-profile.interface';
import { UserProfileCreated } from '../../domains/userProfiles/events/user-profile-created.event';
import { UserProfileUpdated } from '../../domains/userProfiles/events/user-profile-updated.event';
import { UserProfilePayloadDto } from './dto/user-profile-payload.dto';
import { CreateUserProfilePayloadDto } from './dto/create-user-profile-payload.dto';

@Injectable()
export class UserProfileModelService {
  @InjectModel(ViewModels.USER_PROFILES) public model!: Model<
    UserProfileViewModel
  >;

  public async create(data: UserProfileCreated): Promise<void> {
    await this.model.findOneAndUpdate(
      { _id: Types.ObjectId(data.userId) },
      data.userProfile,
      { upsert: true }
    );
  }
  async delete(id: string) {
    await this.model.deleteOne({ _id: Types.ObjectId(id) });
  }
  async update(data: UserProfileUpdated) {
    await this.model.updateOne(
      { _id: new Types.ObjectId(data.id) },
      data.userProfile.imageUrl
        ? { ...data.userProfile, photo: data.userProfile.imageUrl }
        : data.userProfile,
      { upsert: true }
    );
  }

  async getAll(): Promise<UserProfilePayloadDto[]> {
    return this.model.find().exec();
  }
  async getById(id: string): Promise<CreateUserProfilePayloadDto> {
    return this.model.findById(id);
  }
  async getByEmail(email: string) {
    return this.model.find({ email: email }).exec();
  }
  async getMentors(): Promise<UserProfilePayloadDto[]> {
    return this.model.aggregate([
      { $addFields: { userId: { $toString: '$_id' } } },
      {
        $lookup: {
          from: 'courses',
          localField: 'userId',
          foreignField: 'creator._id',
          as: 'courses',
        },
      },
      {
        $match: {
          courses: { $ne: [] },
        },
      },
    ]);
  }
}
