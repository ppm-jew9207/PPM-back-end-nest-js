import { Injectable } from '@nestjs/common';
import { Mentor } from './mentor.model';

@Injectable()
export class MentorsService {
    private mentors: Mentor[]=[];

    getAllMentors(): Mentor[]{
        return this.mentors;
    }
}
