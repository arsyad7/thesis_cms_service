if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}
const express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  cors = require('cors'),
  r = require('./routes'),
  { ErrorHandler } = require('./middlewares/ErrorHandler');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(r);
app.use(ErrorHandler);

app.listen(port, process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0', () => {
  console.log(`Thesis CMS is running on port ${port}`);
})