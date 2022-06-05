
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {

  // API GET Request
  app.get("/api/notes", (request, response) => {
      let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
      response.json(data);
  });


  // API POST Request
  app.post("/api/notes", (request, response) => {
      const newNote = request.body;
      newNote.id = uuidv4();
      let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
      data.push(newNote);
      fs.writeFileSync('./db/db.json', JSON.stringify(data));
      response.json(data);
  });


  // API DELETE request
  app.delete("/api/notes/:id", (request, response) => {
      let noteId = request.params.id.toString();
      let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
      const newData = data.filter( note => note.id.toString() !== noteId );
      fs.writeFileSync('./db/db.json', JSON.stringify(newData));
      response.json(newData);
  });
};
