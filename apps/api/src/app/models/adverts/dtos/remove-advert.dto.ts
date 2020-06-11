import { ApiProperty } from '@nestjs/swagger';
import { RemoveAdvertPayload } from '../adverts.interface';

export class RemoveAdvertPayloadDto implements RemoveAdvertPayload {
  @ApiProperty()
  public readonly id: string;
}
