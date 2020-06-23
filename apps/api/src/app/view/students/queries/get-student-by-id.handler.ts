import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { StudentModelService } from '../../../models/students/student.service';
import { CreateStudentPayloadDto } from '../../../models/students/dto/create-student-payload.dto';


export class GetStudentByIdQuery {
    constructor(public id: string) { }
}

@QueryHandler(GetStudentByIdQuery)
export class GetStudentByIdHandler implements IQueryHandler<GetStudentByIdQuery>{
    @Inject() private readonly _studentModelService: StudentModelService;
    async execute({ id }): Promise<CreateStudentPayloadDto> {
        return this._studentModelService.getById(id);
    }

} 