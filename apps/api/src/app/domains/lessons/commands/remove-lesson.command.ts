import { LessonsAggregate } from '../lessons.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { LessonRemoved } from '../events/lesson-removed.event';
export class RemoveLesson {
  constructor(public readonly id: string) {}
}

@CommandHandler(RemoveLesson)
export class RemoveLessonHandler implements ICommandHandler<RemoveLesson> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ id }: RemoveLesson): Promise<Boolean> {
    const aggregate = new LessonsAggregate();
    aggregate.apply(new LessonRemoved(id));

    const lesson = this._publisher.mergeObjectContext(aggregate);
    lesson.commit();

    return true;
  }
}
