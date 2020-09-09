import { LessonsAggregate } from "../lessons.aggregate";
import { ICommandHandler, EventPublisher, CommandHandler } from "@nestjs/cqrs";
import { Inject } from "@nestjs/common";
import { LessonRemoved } from "../events/lesson-removed.event";
import { RemoveLessonPayloadDto } from "../../../models/lessons/dtos/remove-lesson.dto";

export class RemoveLesson {
  constructor(public data: RemoveLessonPayloadDto) {}
}

@CommandHandler(RemoveLesson)
export class RemoveLessonHandler implements ICommandHandler<RemoveLesson> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: RemoveLesson): Promise<Boolean> {
    const aggregate = new LessonsAggregate();
    aggregate.apply(new LessonRemoved(data));

    const lesson = this._publisher.mergeObjectContext(aggregate);
    lesson.commit();

    return true;
  }
}
