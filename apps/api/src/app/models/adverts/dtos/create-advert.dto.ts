import { ApiProperty } from '@nestjs/swagger';
import {CreateAdvertPayload, RemoveAdvertPayload} from '../adverts.interface';
import { Types } from 'mongoose';

export class CreateAdvertPayloadDto implements CreateAdvertPayload {
  @ApiProperty()
  public readonly title: string;
  @ApiProperty()
  public readonly description?: string;
}
