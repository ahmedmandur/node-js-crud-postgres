const router = require("express").Router();
const bookController = require("../controllers/book.controller");

router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getById);
router.post("/books", bookController.saveBook);
router.put("/books/:id", bookController.updateBook);
router.delete("/books/:id", bookController.deleteBook);

module.exports = router;
