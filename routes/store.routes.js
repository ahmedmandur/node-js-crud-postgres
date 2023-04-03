const router = require("express").Router();
const storeController = require("../controllers/store.controller");

router.get("/stores", storeController.getAllStores);
router.post("/stores", storeController.saveStore);
// router.put("/stores/:id", noteController.updateNote);
// router.delete("/stores/:id", noteController.deleteNote);

module.exports = router;
