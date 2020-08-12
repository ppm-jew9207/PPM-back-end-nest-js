import { ApiProperty } from "@nestjs/swagger";
import { GetCategoryPayload } from "../categories.interface";

export class GetCategoryPayloadDto implements GetCategoryPayload {
  @ApiProperty()
  public readonly id: string;
}
