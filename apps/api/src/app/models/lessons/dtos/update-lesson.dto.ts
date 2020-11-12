import { ApiProperty } from '@nestjs/swagger';
import { LessonPayload } from '../lessons.interface';

export class UpdateLessonPayloadDto implements LessonPayload {
  @ApiProperty()
  public readonly id: string;
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
