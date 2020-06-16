import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateStudentPayloadDto } from '../dto/create-student-payload.dto';
import { Inject } from '@nestjs/common';
import { StudentAggregate } from '../students.aggregate';
import { StudentCreated } from '../events/student-created.event';
import { Types } from 'mongoose';

export class CreateStudent {
    constructor(public data: CreateStudentPayloadDto) {
    }
};

@CommandHandler(CreateStudent)
export class CreateStudentHandler implements ICommandHandler<CreateStudent> {
    @Inject() private readonly _publicher: EventPublisher;
    async execute({ data }: CreateStudent) {
        const aggregate = new StudentAggregate();

        aggregate.apply(new StudentCreated(data, new Types.ObjectId().toHexString()))

        const mentor = this._publicher.mergeObjectContext(aggregate);
        mentor.commit();
        return null;
    }
} 