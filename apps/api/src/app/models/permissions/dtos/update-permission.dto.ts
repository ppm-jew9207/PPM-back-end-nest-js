import { ApiProperty } from '@nestjs/swagger';
import { PermissionPayload } from '../permissions.interface';

export class UpdatePermissionPayloadDto implements PermissionPayload {
  @ApiProperty()
  public readonly role: string;
}
