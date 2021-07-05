import { ICourse } from 'src/interfaces/course.interface';
import { api } from './base';

import { generateId } from '../utils';
import { ISubject } from 'src/interfaces/subject.interface';
import {AxiosResponse} from "axios";

export class CoursesService {

    courses: ICourse[];

    constructor() {
        this.courses = [];
    }

    public async addCourse(course: ICourse): Promise<AxiosResponse<ICourse>> {
        return api.post('/courses', course)
    }

    public async getCourses(): Promise<AxiosResponse<ICourse[]>> {
        return await api.get('/courses', {
           headers: {}
        });
    }

    public async removeCourse(courseId: string) {
      return api.delete(`/courses/${courseId}`, {
        headers: {}
      });
    }

    public async editCourse(course: ICourse): Promise<void> {
      return api.put(`/courses/${course._id}`, course);
    }

    public async getCourse(id: string)
    {
        return await api.get('/courses', {
            data:{ id: id }
        });
    }
}
