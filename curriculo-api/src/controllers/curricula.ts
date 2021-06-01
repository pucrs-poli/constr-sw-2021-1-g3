import Curricula from '../models/curricula';

interface ICurricula {
  name: string;
  skills: string[];
  courses: string[];
}

interface ICurriculaUpdate {
  id: string;
  update: {
    name?: string;
    skills?: string[];
    courses?: string[];
  };
}

export const getCurricula = (id?: string, skills?: boolean) =>
  Curricula.find(id ? { _id: id } : {}).populate(skills ? 'skills' : undefined);

export const createCurricula = ({ name, skills, courses }: ICurricula) =>
  Curricula.create({ name, skills, courses });

export const updateCurricula = ({ id, update }: ICurriculaUpdate) =>
  Curricula.findByIdAndUpdate(id, JSON.parse(JSON.stringify(update)));
