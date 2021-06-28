import { ICourse } from 'src/interfaces/course.interface';
import { api } from './base';

import { generateId } from '../utils';
import { ISubject } from 'src/interfaces/subject.interface';

export class CoursesService {

    courses: ICourse[];

    constructor() {
        this.courses = [
        {
            id: generateId(),
            title: 'Banco de dados',
            description: 'Conceitos de modelagem e implementação de banco de dados',
            subjects: []
        },
        {
            id: generateId(),
            title: 'Fundamentos da programação',
            description: 'Introdução à programação e resolução de problemas',
            subjects: []
        },
        {
            id: generateId(),
            title: 'Matemática discreta',
            description: 'Introdução ao estudo de objectos e estruturas discretas ou finitas',
            subjects: []
        }
        ];
    }

    public addCourse(course: ICourse): void {
        course.id = generateId();
        this.courses.push(course);
    }
    
    public getCourses(): ICourse[] {
        return this.courses;
        //return await api.get('/courses', {
        //    headers: {}
        //});
    }

    public removeCourse(courseId: number): void {
        this.courses = this.courses.filter(c => c.id != courseId);
    }

    public async getCourse(id: string)
    {
        return await api.get('/courses', {
            data:{ id: id }
        });
    }
}