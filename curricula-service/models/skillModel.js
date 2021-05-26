class SkillModel {
    constructor(id, curriculumid, description, type) {
        this.id = id;
        this.curriculumid = curriculumid;
        this.description = description;
        this.type = type;
    }

    get id() {
        return this.id;
    }

    get curriculumid() {
        return this.curriculumid;
    }

    get description() {
        return this.description;
    }

    get type() {
        return this.type;
    }
}

export default CurriculumModel;
