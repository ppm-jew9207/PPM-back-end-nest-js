import { RemoveLessonPayload } from "../../../models/lessons/lessons.interface";

export class LessonRemoved {
  constructor(public readonly lesson: RemoveLessonPayload) {}
}
