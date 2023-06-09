import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import apiRoutes from './api';
import { jsresponse } from '#utils/index';
import { envConfig } from '#configs/env.config';
import { expressLogger } from '#helpers/logger';

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Authorization'],
};

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json({ limit: '20MB' }));
app.use(jsresponse());
app.use(express.urlencoded({ extended: false, limit: '50MB' }));
app.use(cookieParser());
app.use(expressLogger);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '.data')));
app.use(express.static(path.join(__dirname, 'logs')));

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.json({
    status: 'active',
    info: 'library backend api server. Please visit health route for more information.',
    hostname: envConfig.HOSTNAME,
  });
});

export { app };
