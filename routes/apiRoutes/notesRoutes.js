//get/api/notes should read the db.json and return all saved notes as json
//post/api/notes should receive a new note to save on the request body and add to the dbjson and then return new note to the client
//each note needs a unique id (npm)
//BONUS DELETE 

const router = require('express').Router();
const { data } = require('../../db/db');
const { getNotes, saveNote, deleteNote } = require('../../lib/notes.js');


router.get('/notes', (req, res) => {
  console.log(getNotes())
    const notes = getNotes()
    // console.log(notes)
    return notes
    
  });
  
  router.delete('/notes/:id', (req, res) => {
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
  
  });

  module.exports = router;