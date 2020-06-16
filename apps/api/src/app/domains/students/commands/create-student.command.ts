import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateStudentPayloadDto } from '../dto/create-student-payload.dto';

export class CreateStudent {
    constructor(public data: CreateStudentPayloadDto) {
    }
};

@CommandHandler(CreateStudent)
export class CreateStudentHandler implements ICommandHandler<CreateStudent> {
    async execute({ data }: CreateStudent) {
        return null;
    }
} 