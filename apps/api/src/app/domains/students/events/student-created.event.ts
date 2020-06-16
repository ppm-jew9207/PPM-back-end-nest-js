import { CreateStudent } from '../students.interface';

export class StudentCreated {
    constructor(public readonly mentor: CreateStudent, public readonly id: string) {
    }
}