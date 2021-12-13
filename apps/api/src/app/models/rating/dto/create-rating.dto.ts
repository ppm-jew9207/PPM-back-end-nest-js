import { ApiProperty } from '@nestjs/swagger';
import { UserRef } from '../../../shared/shared.interface';

export interface CreateRating {
  courseId: string;
  ratingValue: number;
  user: string;
}
export class CreateRatingPayloadDto implements CreateRating {
  @ApiProperty()
  public readonly courseId: string;
  @ApiProperty()
  public readonly ratingValue: number;
  @ApiProperty()
  public readonly user: string;
}
