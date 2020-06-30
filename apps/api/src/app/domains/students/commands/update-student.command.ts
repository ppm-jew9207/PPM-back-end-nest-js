import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { UpdateStudentPayloadDto } from '../../../models/students/dto/update-student-payload.dto';
import { StudentAggregate } from '../students.aggregate';
import { StudentUpdated } from '../events/student-updated.event';

export class UpdateStudentCommand {
    constructor(public id: string, public payload: UpdateStudentPayloadDto) {
    }
};
@CommandHandler(UpdateStudentCommand)
export class UpdateStudentHandler implements ICommandHandler<UpdateStudentCommand> {
    @Inject() private readonly _publisher: EventPublisher;
    async execute({ id, payload }: UpdateStudentCommand) {
        const aggregate = new StudentAggregate();
        aggregate.apply(new StudentUpdated(id, payload));

        const student = this._publisher.mergeObjectContext(aggregate);
        student.commit();

        return null;
    }
} 