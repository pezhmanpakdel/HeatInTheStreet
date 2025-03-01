const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors=require('cors');
require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    message: 'll'
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
