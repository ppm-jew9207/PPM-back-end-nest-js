import { ApiProperty } from '@nestjs/swagger';
import { UpdatePermissionPayload } from '../permissions.interface';

export class UpdatePermissionPayloadDto implements UpdatePermissionPayload {
  @ApiProperty()
  public readonly id: string;
  @ApiProperty()
  public readonly role: string;
}
