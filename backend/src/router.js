const express = require("express");

const {
  ItemController,
  GuitareController,
  PianoController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/guitares", GuitareController.browse);
router.post("/guitares", GuitareController.add);
router.get("/pianos", PianoController.browse);

module.exports = router;
