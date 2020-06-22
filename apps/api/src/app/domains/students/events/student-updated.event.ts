import { UpdateStudent } from '../../../models/students/student.interface';

export class StudentUpdated {
    constructor(public readonly id: string, public readonly student: UpdateStudent) {
    }
}