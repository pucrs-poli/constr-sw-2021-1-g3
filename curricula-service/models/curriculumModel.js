import mongoose, { Schema } from "mongoose";

const CurriculumSchema = new Schema({
    id: String,
    skills: [{}],
    courses: [{}]
});

const CurriculumModel = mongoose.model('Curriculum', CurriculumSchema);
export default CurriculumModel;
