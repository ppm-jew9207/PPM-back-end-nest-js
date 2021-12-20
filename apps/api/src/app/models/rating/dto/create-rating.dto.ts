import { ApiProperty } from '@nestjs/swagger';
import { UserRef } from '../../../shared/shared.interface';

export interface CreateRating {
  courseId: string;
  rating: number;
  userId: string;
}
export class CreateRatingPayloadDto implements CreateRating {
  @ApiProperty()
  public readonly courseId: string;
  @ApiProperty()
  public readonly rating: number;
  @ApiProperty()
  public readonly userId: string;
}
