import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import mongoose from './database';
import { authorizer } from './middlewares/auth';

const PORT = 4000;
const app = express();

const corsOptions: cors.CorsOptions = {
  origin: '*',
  methods: 'GET,HEAD,POST',
};

app.use(cors(corsOptions));
mongoose.once('open', () => console.log('connected to db'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(authorizer);

app.use('/api/v1', routes);

app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
});
