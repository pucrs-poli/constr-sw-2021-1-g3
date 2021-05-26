class CurriculumModel {
    constructor(id, name, skills, courses) {
        this.id = id;
        this.name = name;
        this.skills = skills;
        this.courses = courses;
    }

    get id() {
        return this.id;
    }

    get name() {
        return this.name;
    }

    get skills() {
        return this.skills;
    }

    get courses() {
        return this.courses;
    }
}

export default CurriculumModel;
