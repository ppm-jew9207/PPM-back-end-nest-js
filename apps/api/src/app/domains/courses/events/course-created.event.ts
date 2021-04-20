import { CreateCoursePayload } from '../../../models/courses/courses.interface';
export class CourseCreated {
  constructor(public readonly id: string, public readonly data: CreateCoursePayload) {}
}