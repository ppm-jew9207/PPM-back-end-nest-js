import { ApiProperty } from '@nestjs/swagger';
import { UserRef } from '../../../shared/shared.interface';

export interface CreateRating {
  courseId: string;
  ratingValue: number;
  sumOfAllRating: number;
  averageRating: number;
  votedInTotal: number;
}
export class CreateRatingPayloadDto implements CreateRating {
  @ApiProperty()
  public readonly courseId: string;
  @ApiProperty()
  public readonly ratingValue: number;
  @ApiProperty()
  public readonly sumOfAllRating: number;
  @ApiProperty()
  public readonly averageRating: number;
  @ApiProperty()
  public readonly votedInTotal: number;
}
