import { ApiProperty } from '@nestjs/swagger';
import { DeleteStudent } from '../../../models/students/student.interface';

export class DeleteStudentPayloadDto implements DeleteStudent {
    @ApiProperty()
    public readonly id: string;
}