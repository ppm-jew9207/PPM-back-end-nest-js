import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { StudentModelService } from '../../../models/students/student.service';
import { CreateStudentPayloadDto } from '../../../models/students/dto/create-student-payload.dto';


export class GetStudentsByIdQuery {
    constructor(public id: string) { }
}

@QueryHandler(GetStudentsByIdQuery)
export class GetStudentByIdHandler implements IQueryHandler<GetStudentsByIdQuery>{
    @Inject() private readonly _studentModelService: StudentModelService;
    async execute({ id }): Promise<CreateStudentPayloadDto> {
        return this._studentModelService.getById(id);
    }

} 