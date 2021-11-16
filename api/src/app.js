const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const setHeaders = require('./middlewares/setHeaders');

const routes = require('./routes/index');

const app = express();

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(setHeaders);

app.use('/', routes);

module.exports = app;
