import { ApiProperty } from '@nestjs/swagger';
import {CreateProjectPayload} from '../projects.interface';
import { Types } from 'mongoose';

export class CreateProjectPayloadDto implements CreateProjectPayload {
  @ApiProperty()
  public readonly title: string;
  @ApiProperty()
  public readonly code: string;
  @ApiProperty()
  public readonly color?: string;
  @ApiProperty()
  public readonly address?: string;
  @ApiProperty()
  public readonly description?: string;
  @ApiProperty()
  public readonly projectType: string;
  @ApiProperty()
  public readonly dateStart: Date;
  @ApiProperty()
  public readonly deadline?: Date;
  @ApiProperty()
  public readonly totalPrice?: number;
  @ApiProperty()
  public readonly created?: Types.ObjectId;
}