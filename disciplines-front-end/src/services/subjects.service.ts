import { ISubject } from "src/interfaces/subject.interface";

export class SubjectsService {
    subjects: ISubject[];

    constructor(){
        this.subjects = [{
            id: 0,
            title: '',
            description: '',
            lessions: []
        }];
    }
}