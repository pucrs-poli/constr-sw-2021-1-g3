/*
/curricula
/curricula/{{id}}
/curricula/{{id}}/skills
/skills
/skills/{{id}}
/curricula/{{id}}/courses
*/

import express from 'express';
import axios from 'axios';
import {
  createCurricula,
  deleteCurriculaById,
  getCurricula,
  getCurriculaById,
  updateCurricula,
} from '../controllers/curricula';

const routes = express.Router();

routes.get('/', async (req, res) => {
  try {
    const response = await getCurricula();
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: 'Error fetching curricula' });
  }
});

routes.get('/:id', async (req, res) => {
  try {
    const response = await getCurriculaById(req.params.id);
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: 'Error fetching curricula' });
  }
});

routes.delete('/:id', async (req, res) => {
  try {
    const response = await deleteCurriculaById(req.params.id);
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: 'Error fetching curricula' });
  }
});

routes.get('/:id/skills', async (req, res) => {
  try {
    const response = await getCurriculaById(req.params.id, true);
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: 'Error fetching curricula' });
  }
});

routes.get('/:id/courses', async (req, res) => {
  try {
    const curricula = await getCurriculaById(req.params.id);
    if (Array.isArray(curricula.courses) && curricula.courses.length) {
      try {
        const courses = await Promise.all(curricula.courses.map(async function (c: String) {
          const response = await axios
            .get(`http://3.138.169.204:8081/courses/${c}`);
          const body = await response.data;
          return body;
        }));
        curricula.courses = courses;
      } catch (e) {
        res.status(400).send({ error: 'Error fetching curricula - courses api did not answer' });
      }
    }
    const response = await curricula;
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: 'Error fetching curricula' });
  }
});

routes.patch('/:id', async (req, res) => {
  try {
    const response = await updateCurricula({
      id: req.params.id,
      update: {
        name: req.body.name,
        skills: req.body.skills,
        courses: req.body.courses,
      },
    });
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: 'Error patching curricula' });
  }
});

routes.post('/', async (req, res) => {
  try {
    const response = await createCurricula({
      name: req.body.name,
      skills: req.body.skills,
      courses: req.body.courses,
    });
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: 'Error patching curricula' });
  }
});

export default routes;
