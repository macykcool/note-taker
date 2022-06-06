const path = require("path");

module.exports = function (app) {
  //GET /notes should return the noteshtml
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  //GET *wildecard should return the indexhtml
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
