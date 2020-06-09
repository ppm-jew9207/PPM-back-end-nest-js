import { ApiProperty } from '@nestjs/swagger';
import { RemoveAdvertPayload } from '../adverts.interface';
import { Types } from 'mongoose';

export class RemoveAdvertPayloadDto implements RemoveAdvertPayload {
  @ApiProperty()
  public readonly _id: Types.ObjectId;
}
