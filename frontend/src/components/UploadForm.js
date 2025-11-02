import React, { useState } from "react";
import API from "../api";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UploadForm({ onUpload }) {
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!video) return alert("Select a video first!");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("video", video);
    await API.post("/videos/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setTitle("");
    setVideo(null);
    onUpload();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Video title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="file"
        accept="video/*"
        className="form-control mb-2"
        onChange={(e) => setVideo(e.target.files[0])}
      />
      <button className="btn btn-primary w-100">Upload Video</button>
    </form>
  );
}
