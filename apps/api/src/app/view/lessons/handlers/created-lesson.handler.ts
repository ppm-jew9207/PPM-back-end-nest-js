import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { LessonCreated } from "../../../domains/lessons/events/lesson-created.event";
import { LessonsModelService } from "../../../models/lessons/lessons.service";
import { Inject } from "@nestjs/common";

@EventsHandler(LessonCreated)
export class LessonCreatedHandler implements IEventHandler<LessonCreated> {
  @Inject() private readonly _lessonsViewService: LessonsModelService;

  public handle({ id, data }: LessonCreated) {
    this._lessonsViewService.create(id, data);
  }
}
