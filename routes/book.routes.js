const router = require("express").Router();
const noteController = require("../controllers/noteController");

router.get("/books", noteController.getAllNotes);
router.post("/books", noteController.saveNote);
router.put("/books/:id", noteController.updateNote);
router.delete("/books/:id", noteController.deleteNote);

module.exports = router;
