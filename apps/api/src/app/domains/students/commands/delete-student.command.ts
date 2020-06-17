import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { StudentAggregate } from '../students.aggregate';
import { StudentDeleted } from '../events/student-deleted.event';

export class DeleteStudent {
    constructor(public id: string) {
    }
};

@CommandHandler(DeleteStudent)
export class DeleteStudentHandler implements ICommandHandler<string> {
    @Inject() private readonly _publisher: EventPublisher;
    async execute(id: string) {
        const aggregate = new StudentAggregate();
        aggregate.apply(new StudentDeleted(id));

        const student = this._publisher.mergeObjectContext(aggregate);
        student.commit();
        return null;
    }
} 