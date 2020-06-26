import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { StudentModelService } from '../../../models/students/student.service';

export class GetStudentByEmailQuery {
    constructor(public email: string) { }
}

@QueryHandler(GetStudentByEmailQuery)
export class GetStudentByEmailHandler implements IQueryHandler<GetStudentByEmailQuery>{
    @Inject() private readonly _studentModelService: StudentModelService;
    async execute({ email }) {
        return this._studentModelService.getByEmail(email);
    }
} 