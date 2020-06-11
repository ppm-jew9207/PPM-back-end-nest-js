import { ApiProperty } from '@nestjs/swagger';
import { RemoveSettingPayload } from '../settings.interface';

export class RemoveSettingPayloadDto implements RemoveSettingPayload {
  @ApiProperty()
  public readonly id: string;
}
