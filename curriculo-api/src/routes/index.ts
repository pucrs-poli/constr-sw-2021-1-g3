import express from 'express';
import curricula from './curricula';
import skill from './skill';

const routes = express.Router();

routes.use('/curricula', curricula);
routes.use('/skill', skill);

export default routes;
