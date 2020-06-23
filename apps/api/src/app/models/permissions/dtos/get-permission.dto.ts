import { ApiProperty } from "@nestjs/swagger";
import { GetPermissionPayload } from "../permissions.interface";

export class GetPermissionPayloadDto implements GetPermissionPayload {
  @ApiProperty()
  public readonly id: string;
}
