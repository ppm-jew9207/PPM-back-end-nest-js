import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { MentorModelService } from '../../../models/mentors/mentor.service';
import { Inject } from '@nestjs/common';
import { MentorUpdated } from '../../../domains/mentors/events/mentor-updated.event';
import { UpdateMentor } from '../../../domains/mentors/mentors.interface';

@EventsHandler(MentorUpdated)
export class MentorUpdatedHandler implements IEventHandler<MentorUpdated>{
    @Inject() private readonly _mentorModelService: MentorModelService;
    public async handle({id, mentor}: MentorUpdated) {
        const updateData: UpdateMentor = {...mentor};
        await this._mentorModelService.update(id, updateData);
        return null;
    }
}