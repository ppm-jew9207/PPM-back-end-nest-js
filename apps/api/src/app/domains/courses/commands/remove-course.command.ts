import { CoursesAggregate } from '../courses.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { CourseRemoved } from '../events/course-removed.event';

export class RemoveCourse {
  constructor(public id: string) {}
}

@CommandHandler(RemoveCourse)
export class RemoveCourseHandler implements ICommandHandler<RemoveCourse> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ id }: RemoveCourse): Promise<Boolean> {
    const aggregate = new CoursesAggregate();
    aggregate.apply(new CourseRemoved(id));

    const course = this._publisher.mergeObjectContext(aggregate);
    course.commit();

    return true;
  }
}
