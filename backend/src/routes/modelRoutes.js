const express = require("express");

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const upload = require(
  "../middleware/uploadMiddleware"
);

const {
  uploadModel,
  getModels
} = require("../controllers/modelController");

const router = express.Router();

router.post(
  "/upload",
  authMiddleware,
  upload.single("model"),
  uploadModel
);

router.get(
  "/",
  authMiddleware,
  getModels
);

module.exports = router;