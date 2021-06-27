import { api } from './base';

export class CoursesService {
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