//dependency
const path = require("path");

//routing
module.exports = function (app) {
//get /notes should return the noteshtml
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

//get *wildcard should return the indexhtml
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
