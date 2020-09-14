import { LessonPayload } from '../../../models/lessons/lessons.interface';

export class LessonUpdated {
  constructor(public readonly lesson: LessonPayload) {}
}
