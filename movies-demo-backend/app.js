const express = require('express');
const moviesRouter = require('./routes/movies');
const cors = require('cors');

const port = 8080;

const app = express();

app.use('/', cors(), moviesRouter);
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
})