import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { Inject } from '@nestjs/common';
import { StudentCreated } from '../../../domains/students/events/student-created.event';
import { StudentModelService } from '../../../models/students/student.service';

@EventsHandler(StudentCreated)
export class StudentCreatedHandler implements IEventHandler<StudentCreated>{
    @Inject() private readonly _studentModelService: StudentModelService;
    public async handle(event: StudentCreated) {
        await this._studentModelService.create(event)
        return null;
    }
}