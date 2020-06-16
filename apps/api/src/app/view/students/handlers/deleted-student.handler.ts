import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { Inject } from '@nestjs/common';
import { StudentModelService } from '../../../models/students/student.service';
import { StudentDeleted } from '../../../domains/students/events/student-deleted.event';

@EventsHandler(StudentDeleted)
export class StudentDeletedHandler implements IEventHandler<StudentDeleted>{
    @Inject() private readonly _studentModelService: StudentModelService;
    public async handle(event: StudentDeleted) {
        await this._studentModelService.delete(event.student)
        return null;
    }
}