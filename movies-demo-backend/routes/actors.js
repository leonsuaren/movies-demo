const express = require('express');
const router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');

router.get('/', async (req, res, next) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = await client.db('moviesDataBase');

    const actors = await db.collection('actors').find().toArray();
    res.status(200).json({ message: 'Actors', actors });
  } catch (error) {
    res.status(404).json({ error: error });
  } 
});


module.exports = router