import { LessonsAggregate } from '../lessons.aggregate';
import { Types } from 'mongoose';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreateLessonPayloadDto } from '../../../models/lessons/dtos/create-lesson.dto';
import { Inject, BadRequestException } from '@nestjs/common';
import { LessonCreated } from '../events/lesson-created.event';
import { UserLean } from '../../../models/users/user.interface';
import { CreateLessonPayload } from '../../../models/lessons/lessons.interface';
import { UsersService } from '../../../models/users/users.service';

export class CreateLesson {
  constructor(public data: CreateLessonPayloadDto, public user: UserLean) {}
}
@CommandHandler(CreateLesson)
export class CreateLessonHandler implements ICommandHandler<CreateLesson> {
  @Inject() private readonly _publisher: EventPublisher;
  @Inject() private readonly _usersService: UsersService;

  async execute({ data, user }: CreateLesson): Promise<Boolean> {
    const userFromDB = await this._usersService.getById(user._id.toHexString());
    if (!userFromDB) {
      throw new BadRequestException(`This user doesn't exist`);
    }

    if (!data.title) {
      throw new BadRequestException('Title is required!');
    }

    const lessonData: CreateLessonPayload = {
      ...data,
      creator: { _id: userFromDB._id, name: userFromDB.userName },
    };
    const aggregate = new LessonsAggregate();
    const id = new Types.ObjectId().toHexString();
    aggregate.apply(new LessonCreated(id, lessonData));
    const lesson = this._publisher.mergeObjectContext(aggregate);
    lesson.commit();

    return true;
  }
}
