import { CreateStudent } from '../students.interface';

export class StudentCreated {
    constructor(public readonly student: CreateStudent, public readonly id: string) {
    }
}