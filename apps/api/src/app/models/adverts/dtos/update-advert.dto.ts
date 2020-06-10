import { ApiProperty } from '@nestjs/swagger';
import { UpdateAdvertPayload } from '../adverts.interface';

export class UpdateAdvertPayloadDto implements UpdateAdvertPayload {
  @ApiProperty()
  public readonly _id: string;
  @ApiProperty()
  public readonly title: string;
  @ApiProperty()
  public readonly description?: string;
}
