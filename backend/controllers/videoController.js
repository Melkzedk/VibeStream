const Video = require("../models/Video");

exports.uploadVideo = async (req, res) => {
  try {
    const video = new Video({
      title: req.body.title,
      filename: req.file.filename,
    });
    await video.save();
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getVideos = async (req, res) => {
  const videos = await Video.find().sort({ uploadedAt: -1 });
  res.json(videos);
};
