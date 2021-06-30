import { generate } from "rxjs";
import { ILession } from "src/interfaces/lession.interface";
import { ISubject } from "src/interfaces/subject.interface";
import { generateId } from "src/utils";

export class SubjectsService {
    subjects: ISubject[];

    constructor(){
        this.subjects = [{
            id: generateId(),
            title: 'Introdução à programação',
            description: 'Início aos estudos de programação com Java',
            lessions: []
        }];
    }

    addLession(subject: ISubject, lession: ILession): ISubject {
        lession.id = generateId();
        subject.lessions.push(lession);
        return subject;
    }

    addSubject(subject: ISubject): ISubject {
        subject.id = generateId();
        this.subjects.push(subject);
        return subject;
    }

    getSubjects(): ISubject[] {
        return this.subjects;
    }
}