import { ApiProperty } from '@nestjs/swagger';

export interface CreateMentor{
    title: string;
    description: string; 
}

export class CreateMentorPayloadDto implements CreateMentor{
    @ApiProperty()
    public readonly title: string;
    @ApiProperty()
    public readonly description: string;
}