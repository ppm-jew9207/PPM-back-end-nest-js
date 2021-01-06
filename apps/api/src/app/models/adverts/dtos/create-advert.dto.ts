import { ApiProperty } from '@nestjs/swagger';
import { UserRef } from '../../../shared/shared.interface';

export class CreateAdvertPayloadDto {
  @ApiProperty()
  public readonly title: string;
  @ApiProperty()
  public readonly description?: string;
  @ApiProperty()
  public readonly imageUrl?: string;
  @ApiProperty()
  public readonly programmingLanguages?: string[];
  @ApiProperty()
  public readonly preRequisites?: string;
  @ApiProperty()
  public readonly advertImageUrl: string;
  @ApiProperty()
  public readonly lessonDescription?: string;
  @ApiProperty()
  public readonly lessonsList?: string[];
  @ApiProperty()
  public readonly creator: UserRef;
  @ApiProperty({ isArray: true, type: 'string' })
  public readonly categories?: string[];
  @ApiProperty({ isArray: true, type: 'string' })
  public readonly learnItems?: string[];
}
