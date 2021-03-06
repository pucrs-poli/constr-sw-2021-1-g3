import Skill from '../models/skill';

interface ISkill {
  description: string;
  type: 'hard' | 'soft';
}

interface ISkillUpdate {
  id: string;
  update: {
    description?: string;
    type?: 'hard' | 'soft';
  };
}

export const getSkill = (id?: string, skills?: boolean) =>
  Skill.find(id ? { _id: id } : {}).populate(skills ? 'skill' : undefined);

export const deleteSkill = (id: string) =>
  Skill.deleteOne({ _id: id }, function (err) {
    if(err) console.log(err);
    console.log("Successful deletion");
  });

export const createSkill = ({ description, type }: ISkill) =>
  Skill.create({ description, type });

export const updateSkill = ({ id, update }: ISkillUpdate) =>
  Skill.findByIdAndUpdate(id, JSON.parse(JSON.stringify(update)));
