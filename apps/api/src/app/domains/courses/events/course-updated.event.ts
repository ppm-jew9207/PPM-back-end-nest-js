import { UpdateCoursePayloadDto } from '../../../models/courses/dtos/update-course.dto';

export class CourseUpdated {
  constructor(public readonly data: UpdateCoursePayloadDto) {}
}