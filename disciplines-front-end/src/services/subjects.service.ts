import { ISubject } from "src/interfaces/subject.interface";
import { generateId } from "src/utils";
import {AxiosResponse} from "axios";
import {api} from "./base";
import {ICourse} from "../interfaces/course.interface";

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

    addSubject(subject: ISubject): Promise<AxiosResponse<void>> {
      return api.post('/subjects', subject)
    }

    async getSubjects(): Promise<AxiosResponse<ISubject[]>> {
        return api.get('/subjects')
    }

    public async getCourseSubjects(course: ICourse): Promise<AxiosResponse<ISubject[]>> {
      return api.get(`/courses/${course._id}/subjects`)
    }

    public async editSubject(subject: ISubject): Promise<AxiosResponse<void>> {
      return api.put(`/subjects/${subject.id}`, subject)
    }
}
