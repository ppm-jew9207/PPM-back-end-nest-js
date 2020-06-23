import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { Inject } from '@nestjs/common';
import { StudentModelService } from '../../../models/students/student.service';
import { StudentUpdated } from '../../../domains/students/events/student-updated.event';

@EventsHandler(StudentUpdated)
export class StudentUpdatedHandler implements IEventHandler<StudentUpdated>{
    @Inject() private readonly _studentModelService: StudentModelService;
    public async handle(event: StudentUpdated) {
        await this._studentModelService.update(event)
        return null;
    }
}