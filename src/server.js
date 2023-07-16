import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';

import initRoutes from './routes';
import errorHandler from './middlewares/errorHandler';

var corsOptions = {
  //   origin: process.env.CLIENT_URL,
  //   optionsSuccessStatus: 200,
};
const PORT = process.env.PORT || 8000;

const app = express();

// app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

initRoutes(app);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
