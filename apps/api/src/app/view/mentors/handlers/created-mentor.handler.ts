import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { MentorCreated } from '../../../domains/mentors/events/mentor-created.event';
import { MentorModelService } from '../../../models/mentors/mentor.service';
import { Inject } from '@nestjs/common';

@EventsHandler(MentorCreated)
export class MentorCreatedHandler implements IEventHandler<MentorCreated> {
  @Inject() private readonly _mentorModelService: MentorModelService;

  public async handle(event: MentorCreated) {
    await this._mentorModelService.createMentor(event.mentor);
    return null;
  }
}
