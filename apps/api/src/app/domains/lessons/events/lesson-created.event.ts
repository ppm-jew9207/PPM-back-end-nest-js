import { CreateLessonPayload } from "../../../models/lessons/lessons.interface";
export class LessonCreated {
  constructor(
    public readonly id: string,
    public readonly data: CreateLessonPayload
  ) {}
}
