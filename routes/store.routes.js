const router = require("express").Router();
const storeController = require("../controllers/store.controller");

router.get("/stores", storeController.getAllStores);
router.get("/stores/:id", storeController.getById);
router.post("/stores", storeController.saveStore);
router.put("/stores/:id", storeController.updateStore);
router.delete("/stores/:id", storeController.deleteStore);

module.exports = router;
