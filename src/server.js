import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';

import initRoutes from './routes';
import errorHandler from './middlewares/errorHandler';

var corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials:true,  
};
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

initRoutes(app);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
