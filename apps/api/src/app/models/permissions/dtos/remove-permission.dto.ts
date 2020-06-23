import { ApiProperty } from "@nestjs/swagger";
import { RemovePermissionPayload } from "../permissions.interface";

export class RemovePermissionPayloadDto implements RemovePermissionPayload {
  @ApiProperty()
  public readonly id: string;
}
