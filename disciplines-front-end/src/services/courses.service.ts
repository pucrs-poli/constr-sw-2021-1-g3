import { ICourse } from 'src/interfaces/course.interface';
import { api } from './base';

import { generateId } from '../utils';

export class CoursesService {

    courses: ICourse[];

    constructor() {
        this.courses = [];
    }

    public addCourse(course: ICourse) {
        course.id = generateId();
    }
    
    public async getCourses() {
        return await api.get('/courses', {
            headers: {}
        });
    }

    public async getCourse(id: string)
    {
        return await api.get('/courses', {
            data:{ id: id }
        });
    }
}