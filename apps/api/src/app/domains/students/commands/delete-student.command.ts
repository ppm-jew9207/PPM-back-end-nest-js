import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { StudentAggregate } from '../students.aggregate';
import { StudentDeleted } from '../events/student-deleted.event';
import { DeleteStudentPayloadDto } from '../../../models/students/dto/delete-student-payload.dto';

export class DeleteStudent {
    constructor(public data: DeleteStudentPayloadDto) {
    }
};

@CommandHandler(DeleteStudent)
export class DeleteStudentHandler implements ICommandHandler<DeleteStudent> {
    @Inject() private readonly _publisher: EventPublisher;
    async execute({ data }: DeleteStudent) {
        const aggregate = new StudentAggregate();
        aggregate.apply(new StudentDeleted(data));

        const student = this._publisher.mergeObjectContext(aggregate);
        student.commit();
        return null;
    }
} 