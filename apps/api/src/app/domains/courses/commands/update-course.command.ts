import { CoursesAggregate } from '../courses.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { CourseUpdated } from '../events/course-updated.event';
import { UpdateCoursePayloadDto } from '../../../models/courses/dtos/update-course.dto';

export class UpdateCourse {
  constructor(public data: UpdateCoursePayloadDto) {}
}

@CommandHandler(UpdateCourse)
export class UpdateCourseHandler implements ICommandHandler<UpdateCourse> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({data}: UpdateCourse): Promise<Boolean> {
    const aggregate = new CoursesAggregate();
    aggregate.apply(new CourseUpdated(data));

    const course = this._publisher.mergeObjectContext(aggregate);
    course.commit();

    return true;
  }
}
