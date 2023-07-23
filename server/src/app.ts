import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import compression from 'compression';
import compressFilter from './utils/compressFilter.util';
import config from './config/config';
import { dataSource } from './config/database';
import routes from './routes/v1/index.route';

dataSource
  .initialize()
  .then(() => {
      console.log('Data Source has been initialized!');
  })
  .catch((err: Error) => {
    console.error('Error during Data Source initialization:', err);
  });

const app: Express = express();

app.use(
  cors({
    // origin is given a array if we want to have multiple origins later
    origin: config.cors_origin,
  })
);

// Helmet is used to secure this app by configuring the http-header
app.use(helmet());

// Compression is used to reduce the size of the response body
app.use(compression({ filter: compressFilter }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api/v1/', routes);

export default app;
