import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CourseRemoved } from '../../../domains/courses/events/course-removed.event';
import { CoursesModelService } from '../../../models/courses/courses.service';
import { Inject } from '@nestjs/common';

@EventsHandler(CourseRemoved)
export class CourseRemovedHandler implements IEventHandler<CourseRemoved> {
  @Inject() private readonly _coursesViewService: CoursesModelService;

  public handle({id}: CourseRemoved) {
    this._coursesViewService.remove(id);
  }
}
