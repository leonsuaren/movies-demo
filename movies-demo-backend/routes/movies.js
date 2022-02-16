const express = require('express');
const router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');


router.get('/movies', async (req, res, next) => {
  try{
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = await client.db('moviesDataBase');

    const movies = await db.collection('movies').find().toArray();
    res.status(200).json({ message: 'Movies', movies })

  } catch (error) {
    res.status(500).json({ message: 'Error', error })
  }
});

router.get('/movies/:_id', async (req, res, next) => {
  try {
    const movieId = req.params._id;
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = await client.db('moviesDataBase');

    const query = {_id: ObjectId(movieId)}
    const movie = await db.collection('movies').findOne(query);
    res.status(200).json({ message: 'One Movie', movie });
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

module.exports = router;