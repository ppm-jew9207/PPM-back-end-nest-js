import { ApiProperty } from '@nestjs/swagger';
import { DeleteStudent } from '../students.interface';

export class DeleteStudentPayloadDto implements DeleteStudent {
    @ApiProperty()
    public readonly id: string;
}