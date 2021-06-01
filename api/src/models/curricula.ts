import mongoose from '../database';

const CurriculaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  skills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Skill',
      required: true,
    },
  ],
  courses: {
    type: [String],
    required: true,
  },
});

CurriculaSchema.set('toJSON', { virtuals: true });

const Curricula = mongoose.model('Curricula', CurriculaSchema);

export default Curricula;
