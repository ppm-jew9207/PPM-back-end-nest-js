import { ApiProperty } from "@nestjs/swagger";
import { UpdateCategoryPayload } from "../categories.interface";

export class UpdateCategoryPayloadDto implements UpdateCategoryPayload {
  @ApiProperty()
  public readonly id: string;
  @ApiProperty()
  public readonly title: string;
  @ApiProperty()
  public readonly value: string;
}
