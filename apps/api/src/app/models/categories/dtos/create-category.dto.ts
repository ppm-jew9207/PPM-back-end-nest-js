import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryPayloadDto {
  @ApiProperty()
  public readonly title: string;
  @ApiProperty()
  public readonly value: string;
}
