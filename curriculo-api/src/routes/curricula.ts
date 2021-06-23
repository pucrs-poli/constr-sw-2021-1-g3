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
  getCurricula,
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
    const response = await getCurricula(req.params.id);
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: 'Error fetching curricula' });
  }
});

routes.get('/:id/skills', async (req, res) => {
  try {
    const response = await getCurricula(req.params.id, true);
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: 'Error fetching curricula' });
  }
});

routes.get('/:id/courses', async (req, res) => {
  try {
    const curricula = await getCurricula(req.params.id);
    if (curricula.courses && curricula.courses.lenght) {
      try {
        const courses = curricula.courses.map(function (c: String) {
          const course = axios.get(`http://18.118.35.192:8081/courses/${c}`);
          return course;
        })
        curricula.courses = courses;
      } catch (e) {
        res.status(400).send({ error: 'Error fetching curricula - courses api did not answer' });
      }
    }
    const response = curricula;
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
