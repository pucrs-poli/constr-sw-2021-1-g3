import CurriculumModel from './models/curriculumModel';

/*
/curricula
/curricula/{{id}}
/curricula/{{id}}/skills
/skills
/skills/{{id}}
/curricula/{{id}}/courses
*/

class CurriculumService {
    
    //curricula
    all() { }

    //curricula/:id
    create(curriculum) {
        const curriculum = new CurriculumModel({
            id: 'test'
        });
        curriculum.save((err, doc) => {
            console.log(err);
        });
     }

    //curricula/:id
    update(id, curriculum) { }

    //curricula/:id
    delete(id) { }

    //curricula/:id
    search(id) { }

    //curricula/:id/skills
    skils(id) { }

    //curricula/:id/courses
    courses(id) { }

}