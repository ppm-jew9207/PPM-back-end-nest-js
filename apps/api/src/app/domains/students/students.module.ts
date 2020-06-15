import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { StudentsController } from './students.controller';

@Module({
    imports: [CqrsModule],
    controllers: [StudentsController],
    providers: [],
})
export class StudentsModule { }