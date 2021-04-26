import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CourseUpdated } from '../../../domains/courses/events/course-updated.event';
import { CoursesModelService } from '../../../models/courses/courses.service';
import { Inject } from '@nestjs/common';

@EventsHandler(CourseUpdated)
export class CourseUpdatedHandler implements IEventHandler<CourseUpdated> {
  @Inject() private readonly _coursesViewService: CoursesModelService;

  public handle({ data }: CourseUpdated) {
    this._coursesViewService.update(data);
  }
}
