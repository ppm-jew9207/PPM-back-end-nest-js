import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { LessonRemoved } from '../../../domains/lessons/events/lesson-removed.event';
import { LessonsModelService } from '../../../models/lessons/lessons.service';
import { Inject } from '@nestjs/common';

@EventsHandler(LessonRemoved)
export class LessonRemovedHandler implements IEventHandler<LessonRemoved> {
  @Inject() private readonly _lessonsViewService: LessonsModelService;

  public handle({ id }: LessonRemoved) {
    this._lessonsViewService.remove(id);
  }
}
