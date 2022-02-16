const express = require('express');
const router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');


router.get('/', async (req, res, next) => {
  try{
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = await client.db('moviesDataBase');

    const movies = await db.collection('movies').find().toArray();
    res.status(200).json({ message: 'Movies', movies })

  } catch (error) {
    res.status(500).json({ message: 'Error', error })
  }
});

module.exports = router;