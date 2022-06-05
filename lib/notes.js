const fs = require("fs");
const path = require("path");
const util = require("util");
const readFile = util.promisify(fs.readFile);

function getNotes() {
  readFile("db/db.json", "utf8").then((notes) => {
    console.log(notes);
    return JSON.stringify(notes);
  });
}

function saveNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

function deleteNote() {}

module.exports = {
  getNotes,
  saveNote,
  deleteNote,
};
