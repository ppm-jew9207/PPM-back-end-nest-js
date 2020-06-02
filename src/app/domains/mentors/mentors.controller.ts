import { Controller, Get } from '@nestjs/common';
import { Mentor } from './mentor.model';
import { MentorsService } from './mentors.service';

@Controller('mentors')
export class MentorsController {
    constructor(private mentorsService: MentorsService){}

    @Get()
    getAllMentors(): Mentor[] {
        return this.mentorsService.getAllMentors();
  }
}
