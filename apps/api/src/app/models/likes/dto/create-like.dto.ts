import { ApiProperty } from '@nestjs/swagger';
import { UserRef } from '../../../shared/shared.interface';
import { likeType } from '../likes.interface'

export class CreateLikePayloadDto {
  @ApiProperty()
  public readonly course: string;
  @ApiProperty()
  public readonly type: likeType;
}
