import { CreateMentor } from '../mentors.interface';


export class MentorCreated {
    constructor(public readonly mentor: CreateMentor, public readonly id: string) {
    }
}