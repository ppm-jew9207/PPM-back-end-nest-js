import { ApiProperty } from '@nestjs/swagger';
import { UserRef } from './shared.interface';
import { Types } from 'mongoose';

export class UserRefDto implements UserRef{
  @ApiProperty()
  public readonly _id: Types.ObjectId;
  @ApiProperty()
  public readonly name: string;
}