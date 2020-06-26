import { ApiProperty } from '@nestjs/swagger';
import { UserRef } from '../../../shared/shared.interface';

export class CreatePermissionPayloadDto {
  @ApiProperty()
  public readonly user: UserRef;
  @ApiProperty()
  public readonly role: string;
}
