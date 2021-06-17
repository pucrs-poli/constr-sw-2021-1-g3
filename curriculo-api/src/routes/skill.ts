/*
/skills
/skills/{{id}}
*/

import express from 'express';
import { getSkill, updateSkill, createSkill } from '../controllers/skill';

const routes = express.Router();

routes.get('/', async (req, res) => {
  try {
    const response = await getSkill();
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: 'Error fetching skill' });
  }
});

routes.get('/:id', async (req, res) => {
  try {
    const response = await getSkill(req.params.id);
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: 'Error fetching curricula' });
  }
});

routes.patch('/:id', async (req, res) => {
  try {
    const response = await updateSkill({
      id: req.params.id,
      update: {
        description: req.body.description,
        type: req.body.type,
      },
    });
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: 'Error patching curricula' });
  }
});

routes.post('/', async (req, res) => {
  try {
    const response = await createSkill({
      description: req.body.description,
      type: req.body.type,
    });
    res.send(response);
  } catch (e) {
    console.log(e)
    res.status(400).send({ error: 'Error patching curricula' });
  }
});

export default routes;
