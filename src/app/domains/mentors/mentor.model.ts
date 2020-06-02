export interface Mentor{
    id: string,
    image: string,
    title: string;
    description: string;
    date: string,
    status: MentorStatus;
}

export enum MentorStatus{
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}