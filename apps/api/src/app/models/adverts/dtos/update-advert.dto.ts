import { ApiProperty } from '@nestjs/swagger';
import { AdvertPayload } from '../adverts.interface';

export class UpdateAdvertPayloadDto implements AdvertPayload {
  @ApiProperty()
  public readonly id: string;
  @ApiProperty()
  public readonly title: string;
  @ApiProperty()
  public readonly description?: string;
  @ApiProperty()
  public readonly category: string;
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
}
