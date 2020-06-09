import { ApiProperty } from '@nestjs/swagger';
import { GetAdvertPayload} from '../adverts.interface';
import { Types } from 'mongoose';

export class GetAdvertPayloadDto implements GetAdvertPayload {
  @ApiProperty()
  public readonly _id: Types.ObjectId;
}
