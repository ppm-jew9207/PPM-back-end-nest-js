import { ApiProperty } from "@nestjs/swagger";
import { RemoveLessonPayload } from "../lessons.interface";

export class RemoveLessonPayloadDto implements RemoveLessonPayload {
  @ApiProperty()
  public readonly id: string;
}
