import { ISubject } from "./subject.interface";

export interface ICourse {
    _id: string;
    title: string;
    description: string;
    subjects: ISubject[];
}
