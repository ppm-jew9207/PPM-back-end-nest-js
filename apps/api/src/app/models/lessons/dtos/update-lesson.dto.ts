import { ApiProperty } from '@nestjs/swagger';
import { UpdateLessonPayload } from '../lessons.interface';

export class UpdateLessonPayloadDto implements UpdateLessonPayload {
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
}
