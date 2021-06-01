import mongoose from '../database';

const SkillSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['hard', 'soft'],
  },
});

SkillSchema.set('toJSON', { virtuals: true });

const Skill = mongoose.model('Skill', SkillSchema);

export default Skill;
