import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { StudentAggregate } from '../students.aggregate';
import { StudentCreated } from '../events/student-created.event';
import { Types } from 'mongoose';
import { CreateStudentPayloadDto } from '../../../models/students/dto/create-student-payload.dto';

export class CreateStudent {
    constructor(public data: CreateStudentPayloadDto) {
    }
};

@CommandHandler(CreateStudent)
export class CreateStudentHandler implements ICommandHandler<CreateStudent> {
    @Inject() private readonly _publisher: EventPublisher;
    async execute({ data }: CreateStudent) {
        const aggregate = new StudentAggregate();

        aggregate.apply(new StudentCreated(data, new Types.ObjectId().toHexString()))

        const student = this._publisher.mergeObjectContext(aggregate);
        student.commit();
        return null;
    }
} 