import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { StudentModelService } from '../../../models/students/student.service';

export class GetStudentsQuery { }

@QueryHandler(GetStudentsQuery)
export class GetStudentsHandler implements IQueryHandler<GetStudentsQuery>{
    @Inject() private readonly _studentModelService: StudentModelService;
    async execute() {
        return this._studentModelService.model.find().exec();
    }
}