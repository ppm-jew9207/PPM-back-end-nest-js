import { ApiProperty } from '@nestjs/swagger';
import { CategoryPayload } from '../categories.interface';

export class UpdateCategoryPayloadDto implements CategoryPayload {
  @ApiProperty()
  public readonly id: string;
  @ApiProperty()
  public readonly title: string;
  @ApiProperty()
  public readonly value: string;
}
