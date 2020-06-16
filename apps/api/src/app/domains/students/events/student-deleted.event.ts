import { DeleteStudent } from '../students.interface';

export class StudentDeleted {
    constructor(public readonly student: DeleteStudent) {
    }
}