import { ApiProperty } from '@nestjs/swagger';
import { GetSettingPayload} from '../settings.interface';

export class GetSettingPayloadDto implements GetSettingPayload {
  @ApiProperty()
  public readonly id: string;
}
