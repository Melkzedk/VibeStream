const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { uploadVideo, getVideos } = require("../controllers/videoController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

router.post("/upload", upload.single("video"), uploadVideo);
router.get("/", getVideos);

module.exports = router;
