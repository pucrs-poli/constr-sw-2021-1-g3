class SkillModel {
    constructor(id, curriculumId, description, type) {
        this.id = id;
        this.curriculumId = curriculumId;
        this.description = description;
        this.type = type;
    }

    get id() {
        return this.id;
    }

    get curriculumId() {
        return this.curriculumId;
    }

    get description() {
        return this.description;
    }

    get type() {
        return this.type;
    }
}

export default SkillModel;
