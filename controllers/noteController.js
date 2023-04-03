// var noteModel = require("../models/book.model");

// exports.getAllNotes = function (req, res) {};

// exports.saveNote = function (req, res) {
//   var Note = noteModel.Note;

//   if (!req.body.title || !req.body.content) {
//     return res.status(400).send("Bad Request: title and content are required");
//   }

//   var createdBy = "admin";
//   var createdOn = new Date();

//   var note = new Note(
//     generator.generate(),
//     req.body.title,
//     req.body.content,
//     createdBy,
//     createdOn
//   );

//   return res.status(201).send(note);
// };

// exports.updateNote = function (req, res) {
//   var Note = noteModel.Note;

//   var noteId = req.params.id;
//   if (!noteId) {
//     return res.status(400).send("Bad Request: note id is required");
//   }

//   if (!req.body.title || !req.body.content) {
//     return res.status(400).send("Bad Request: title and content are required");
//   }

//   var createdBy = "admin";
//   var createdOn = new Date();
//   //get the note from database

//   if (!notedb) {
//     return res.status(404).send("Note not found");
//   }

//   var note = new Note(
//     noteId,
//     req.body.title,
//     req.body.content,
//     createdBy,
//     createdOn
//   );

//   //update the note in database

//   return res.status(200).send(note);
// };

// exports.deleteNote = function (req, res) {
//   var noteId = req.params.id;
//   if (!noteId) {
//     return res.status(400).send("Bad Request: note id is required");
//   }

//   //get the note from database
//   if (!notedb) {
//     return res.status(404).send("Note not found");
//   }

//   //delete the note from database

//   return res.status(200).send("Note deleted");
// };
