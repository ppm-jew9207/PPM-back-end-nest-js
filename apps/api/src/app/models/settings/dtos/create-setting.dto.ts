import { ApiProperty } from '@nestjs/swagger';
import { CreateSettingPayload } from '../settings.interface';

export class CreateSettingPayloadDto implements CreateSettingPayload {
  @ApiProperty()
  public readonly type: string;
  @ApiProperty()
  public readonly settings: any;
  @ApiProperty()
  public readonly user: { _id: string; userName: string };
  @ApiProperty()
  public readonly enabled: boolean;
}
