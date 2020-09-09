import { ApiProperty } from "@nestjs/swagger";
import { GetLessonPayload } from "../lessons.interface";

export class GetLessonPayloadDto implements GetLessonPayload {
  @ApiProperty()
  public readonly id: string;
}
