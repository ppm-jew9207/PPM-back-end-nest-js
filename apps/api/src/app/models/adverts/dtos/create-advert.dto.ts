import { ApiProperty } from '@nestjs/swagger';
import { CreateAdvertPayload } from '../adverts.interface';
import { Types } from 'mongoose';

export class CreateAdvertPayloadDto implements CreateAdvertPayload {
  @ApiProperty()
  public readonly _id: Types.ObjectId;
  @ApiProperty()
  public readonly title: string;
  @ApiProperty()
  public readonly description?: string;
}
