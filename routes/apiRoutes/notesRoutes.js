const router = require("express").Router();
const data = require("../../db/db");

//get/api/notes should read the db.json and return all saved notes as json
router.get("/notes", (req, res) => {
  data
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.send(404).json(err));
});

//post/api/notes should receive a new note to save on the request body and add to the dbjson and then return new note to the client
router.post("/notes", (req, res) => {
  data
    .saveNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.send(404).json(err));
});

//BONUS DELETE
router.delete("/notes/:id", (req, res) => {
data
.deleteNote(req.params.id)
.then(() => res.json({ ok: true }))
.catch((err) => res.send(404).json(err));
});

module.exports = router;
