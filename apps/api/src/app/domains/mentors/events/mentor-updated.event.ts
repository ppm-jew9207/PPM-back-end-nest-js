import {  UpdateMentor } from '../mentors.interface';


export class MentorUpdated {
    constructor(public readonly id: string, public readonly mentor: UpdateMentor) {
    }
}