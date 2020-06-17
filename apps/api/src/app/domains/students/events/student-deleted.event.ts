import { DeleteStudent } from '../commands/delete-student.command';

export class StudentDeleted {
    constructor(public readonly student: string) {
    }
}