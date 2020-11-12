import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonPayloadDto {
  @ApiProperty()
  public readonly title: string;
  @ApiProperty()
  public readonly description: string;
  @ApiProperty()
  public readonly datetime: Date;
  @ApiProperty({ isArray: true, type: 'string' })
  public readonly resources?: string[];
  @ApiProperty()
  public readonly connectionUrl: string;
  @ApiProperty()
  public readonly imageUrl?: string;
  @ApiProperty({ isArray: true, type: 'string' })
  public readonly categories?: string[];
}
