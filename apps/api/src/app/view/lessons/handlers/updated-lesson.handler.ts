import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { LessonUpdated } from "../../../domains/lessons/events/lesson-updated.event";
import { LessonsModelService } from "../../../models/lessons/lessons.service";
import { Inject } from "@nestjs/common";

@EventsHandler(LessonUpdated)
export class LessonUpdatedHandler implements IEventHandler<LessonUpdated> {
  @Inject() private readonly _lessonsViewService: LessonsModelService;

  public handle(event: LessonUpdated) {
    this._lessonsViewService.update(event.lesson.id, event.lesson);
  }
}
