import { DeleteStudent } from '../../../models/students/student.interface';

export class StudentDeleted {
    constructor(public readonly student: DeleteStudent) {
    }
}