import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CourseCreated } from '../../../domains/courses/events/course-created.event';
import { CoursesModelService } from '../../../models/courses/courses.service';
import { Inject } from '@nestjs/common';

@EventsHandler(CourseCreated)
export class CourseCreatedHandler implements IEventHandler<CourseCreated> {
  @Inject() private readonly _coursesViewService: CoursesModelService;

  public handle({ id, data }: CourseCreated) {
    this._coursesViewService.create(id, data);
  }
}
