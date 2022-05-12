const express = require('express');
require('dotenv').config();
const volleyball = require('volleyball');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');

const apiRouter = require('./routes/api');
const { IMAGES_PATH } = require('./config/constants');
require('./config/passport');

const app = express();

app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());
app.use(volleyball);
app.use(compression());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use('/api/v1', apiRouter);
app.get('/images/:fileName', (req, res) => {
  const imagePath = path.join(IMAGES_PATH, req.params.fileName);
  res.sendFile(imagePath);
});

app.get('/docs/schema', (req, res) => {
  const docsSchemaPath = path.join(process.cwd(), 'docs/schema.yaml');
  res.sendFile(docsSchemaPath);
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send(error.message);
});

module.exports = app;
