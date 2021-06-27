import { ISubject } from "./subject.interface";

export interface ICourse {
    id: number; 
    title: string;
    description: string;
    subjects: ISubject[];
}