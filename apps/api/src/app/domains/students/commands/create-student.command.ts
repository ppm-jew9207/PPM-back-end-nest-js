import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';

export class CreateStudent {
    constructor(public data: string) {
    }
};

@CommandHandler(CreateStudent)
export class CreateStudentHandler implements ICommandHandler<CreateStudent> {
    async execute({ data }: CreateStudent) {
        return null;
    }
} 