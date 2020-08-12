import { ApiProperty } from "@nestjs/swagger";
import { RemoveCategoryPayload } from "../categories.interface";

export class RemoveCategoryPayloadDto implements RemoveCategoryPayload {
  @ApiProperty()
  public readonly id: string;
}
