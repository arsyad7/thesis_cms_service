require('dotenv').config();
const express = require('express'),
  app = express(),
  port = process.env.PORT || 4747,
  cors = require('cors'),
  r = require('./routes'),
  { ErrorHandler } = require('./middlewares/ErrorHandler');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(r);
app.use(ErrorHandler);

app.listen(port, () => {
  console.log(`Thesis CMS is running on port ${port}`);
})