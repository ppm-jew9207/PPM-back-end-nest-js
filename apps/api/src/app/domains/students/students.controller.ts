import { Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Controller('students')
export class StudentsController {
    constructor(
        private readonly _commandBus: CommandBus,
    ) { }

    @Post()
    async createStudent() {
        return null;
    }
}