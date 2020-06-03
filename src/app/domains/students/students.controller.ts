import {
  Controller,
  Post,
  HttpStatus,
  HttpCode,
  Body,
  Param,
} from '@nestjs/common';

import { CreateStudentDto, UpdateStudentDto } from '../../common/dto/student.dto';
import { StudentsService } from './students.service';

@Controller('students-domain')
export class StudentsController {
  constructor(private _studentsService: StudentsService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async createStudent(@Body() createStudentDto: CreateStudentDto): Promise<Boolean> {
    return this._studentsService.createStudent(createStudentDto);
  }

  @Post('/:id/update')
  @HttpCode(HttpStatus.OK)
  async updatesStudent(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto): Promise<Boolean> {
    this._studentsService.updateStudent(id, updateStudentDto);
    return true;
  }

  @Post('/:id/delete')
  @HttpCode(HttpStatus.OK)
  async deleteStudent(@Param('id') id: string): Promise<Boolean> {
    this._studentsService.removeStudent(id);
    return true;
  }
}
