import { CoursesAggregate } from '../courses.aggregate';
import { Types } from 'mongoose';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreateCoursePayloadDto } from '../../../models/courses/dtos/create-course.dto';
import { Inject, BadRequestException } from '@nestjs/common';
import { CourseCreated } from '../events/course-created.event';
import { UserLean } from '../../../models/users/user.interface';
import { CreateCoursePayload } from '../../../models/courses/courses.interface';
import { UsersService } from '../../../models/users/users.service';
import { UserProfileModelService } from '../../../models/userProfiles/user-profile.service';

export class CreateCourse {
  constructor(public data: CreateCoursePayloadDto, public user: UserLean) {}
}
@CommandHandler(CreateCourse)
export class CreateCourseHandler implements ICommandHandler<CreateCourse> {
  @Inject() private readonly _publisher: EventPublisher;
  @Inject() private readonly _usersService: UsersService;
  @Inject() private readonly _userProfileService: UserProfileModelService;

  async execute({ data, user }: CreateCourse): Promise<Boolean> {
    const userFromDB = await this._usersService.getById(user._id);
    const userProfile = await this._userProfileService.getById(user._id);

    if (!userFromDB) {
      throw new BadRequestException(`This user doesn't exist`);
    }

    if (!data.title) {
      throw new BadRequestException('Title is required!');
    }

    const courseData: CreateCoursePayload = {
      ...data,
      creator: {
        _id: userFromDB._id,
        name: `${userProfile.firstName} ${userProfile.lastName}`,
        imageUrl: userProfile.photo,
      },
    };
    const aggregate = new CoursesAggregate();
    const id = new Types.ObjectId().toHexString();
    aggregate.apply(new CourseCreated(id, courseData));
    const course = this._publisher.mergeObjectContext(aggregate);
    course.commit();

    return true;
  }
}
