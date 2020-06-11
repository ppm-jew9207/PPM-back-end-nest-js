import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { MentorCreated } from '../../../domains/mentors/events/mentor-created.event';

@EventsHandler(MentorCreated)
export class MentorCreatedHandler implements IEventHandler<MentorCreated>{
    public async handle(event:MentorCreated){}
}