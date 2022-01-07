import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import setHeaders from './middlewares/setHeaders';

import routes from './routes/index.route';

const app = express();

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(setHeaders);

app.use('/', routes);

export default app;
