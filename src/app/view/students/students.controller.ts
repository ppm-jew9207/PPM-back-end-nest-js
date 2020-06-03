import {
  Controller,
  HttpStatus,
  HttpCode,
  Get,
  Param,
} from '@nestjs/common';

import { StudentsService } from './students.service';
import { Student } from 'src/app/common/interfaces/student.interface';

@Controller('students-view')
export class StudentsController {
  constructor(private _studentsService: StudentsService) {}

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getStudentById(@Param('id') id: string): Promise<Student> {
    return this._studentsService.getStudentById(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getStudents(): Promise<Student[]> {
    return this._studentsService.getStudents();
  }
}