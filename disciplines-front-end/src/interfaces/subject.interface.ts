import { ILession } from "./lession.interface";

export interface ISubject {
    id: number; 
    title: string;
    description: string;
    lessions: ILession[];
}