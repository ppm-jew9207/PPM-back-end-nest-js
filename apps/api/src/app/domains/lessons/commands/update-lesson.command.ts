import { LessonsAggregate } from "../lessons.aggregate";
import { ICommandHandler, EventPublisher, CommandHandler } from "@nestjs/cqrs";
import { Inject } from "@nestjs/common";
import { LessonUpdated } from "../events/lesson-updated.event";
import { UpdateLessonPayloadDto } from "../../../models/lessons/dtos/update-lesson.dto";

export class UpdateLesson {
  constructor(public data: UpdateLessonPayloadDto) {}
}

@CommandHandler(UpdateLesson)
export class UpdateLessonHandler implements ICommandHandler<UpdateLesson> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: UpdateLesson): Promise<Boolean> {
    const aggregate = new LessonsAggregate();
    aggregate.apply(new LessonUpdated(data));

    const lesson = this._publisher.mergeObjectContext(aggregate);
    lesson.commit();

    return true;
  }
}
