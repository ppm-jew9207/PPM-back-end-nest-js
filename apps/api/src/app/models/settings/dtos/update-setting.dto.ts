import { ApiProperty } from '@nestjs/swagger';
import { UpdateSettingPayload } from '../settings.interface';

export class UpdateSettingPayloadDto implements UpdateSettingPayload {
  @ApiProperty()
  public readonly id: string;
  @ApiProperty()
  public readonly type?: string;
  @ApiProperty()
  public readonly settings?: any;
  @ApiProperty()
  public readonly user?: { _id: string; userName: string; };  
  @ApiProperty()
  public readonly enabled?: boolean  
}
