//get/api/notes should read the db.json and return all saved notes as json
//post/api/notes should receive a new note to save on the request body and add to the dbjson and then return new note to the client
//each note needs a unique id (npm)
//BONUS DELETE 

const router = require('express').Router();
// const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/notes');
const { data } = require('../../db/db');


router.get('/notes', (req, res) => {
    let results = data;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });
  
  router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, data);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });
  
  router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = data.length.toString();
  
    if (!validateNote(req.body)) {
      res.status(400).send('The note is not properly formatted.');
    } else {
      const note = createNewNote(req.body, data);
      res.json(note);
    }
  });

  module.exports = router;