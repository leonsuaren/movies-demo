const express = require('express');
const indexRouter = require('./routes/index');
const cors = require('cors');

const port = 8080;

const app = express();

app.use('/', indexRouter);
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
})