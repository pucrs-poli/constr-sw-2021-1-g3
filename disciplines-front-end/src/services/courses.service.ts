import { ICourse } from 'src/interfaces/course.interface';
import { api } from './base';

import { generateId } from '../utils';
import { ISubject } from 'src/interfaces/subject.interface';

export class CoursesService {

    courses: ICourse[];

    constructor() {
        this.courses = [];
    }

    public addCourse(course: ICourse): void {
        this.courses.push(course);
    }

    public async getCourses(): Promise<ICourse[]> {
        return await api.get('/courses', {
           headers: {}
        });
    }

    public removeCourse(courseId: string): void {
        this.courses = this.courses.filter(c => c._id != courseId);
    }

    public async getCourse(id: string)
    {
        return await api.get('/courses', {
            data:{ id: id }
        });
    }
}
