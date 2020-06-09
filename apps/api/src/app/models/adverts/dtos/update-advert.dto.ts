import { ApiProperty } from '@nestjs/swagger';
import {CreateAdvertPayload, UpdateAdvertPayload} from '../adverts.interface';
import { Types } from 'mongoose';

export class UpdateAdvertPayloadDto implements UpdateAdvertPayload {
  @ApiProperty()
  public readonly _id: Types.ObjectId;
  @ApiProperty()
  public readonly title: string;
  @ApiProperty()
  public readonly description?: string;
}
