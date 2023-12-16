const multer=require ("multer");
const upload = multer ({storage :multer.memoryStorage()});

const express = require("express");
const router = express.Router();

const controller = require("../controllers/tareasController");

router.get("/", controller.index);
router.post("/", controller.store);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;