import { CreateStudent } from '../../../models/students/student.interface';

export class StudentCreated {
    constructor(public readonly student: CreateStudent, public readonly id: string) {
    }
}