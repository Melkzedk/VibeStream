import React, { useState } from "react";
import { motion } from "framer-motion";
import API from "../api";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UploadForm({ onUpload }) {
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!video) return alert("Select a video first!");
    setUploading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("video", video);

    await API.post("/videos/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setTitle("");
    setVideo(null);
    setPreview(null);
    setUploading(false);
    onUpload();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setVideo(file);
    setPreview(URL.createObjectURL(file)); // ✅ create a temporary preview URL
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-4 p-4 border rounded shadow-sm bg-light"
    >
      <motion.h4
        className="text-center mb-3 fw-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        🎥 Share your vibe, upload your clip!
      </motion.h4>

      <form onSubmit={handleSubmit}>
        <motion.input
          whileFocus={{ scale: 1.03 }}
          type="text"
          className="form-control mb-3"
          placeholder="Enter a catchy video title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <motion.input
          whileHover={{ scale: 1.02 }}
          type="file"
          accept="video/*"
          className="form-control mb-3"
          onChange={handleFileChange}
        />

        {/* ✅ Video preview section */}
        {preview && (
          <motion.div
            className="text-center mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h6 className="text-muted mb-2">🎬 Preview:</h6>
            <video
              src={preview}
              controls
              className="w-100 rounded shadow-sm"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary w-100"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Video 🚀"}
        </motion.button>
      </form>

      <motion.p
        className="text-center mt-3 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        💡 “Your story deserves the spotlight!!!”
      </motion.p>
    </motion.div>
  );
}
