import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { StudentAggregate } from '../students.aggregate';
import { StudentDeleted } from '../events/student-deleted.event';

export class DeleteStudentId {
    constructor(public id: string) {
    }
};
@CommandHandler(DeleteStudentId)
export class DeleteStudentHandler implements ICommandHandler<DeleteStudentId> {
    @Inject() private readonly _publisher: EventPublisher;
    async execute({ id }: DeleteStudentId) {
        const aggregate = new StudentAggregate();
        aggregate.apply(new StudentDeleted(id));

        const student = this._publisher.mergeObjectContext(aggregate);
        student.commit();
        return null;
    }
} 