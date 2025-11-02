import React, { useEffect, useState } from "react";
import API from "./api";
import UploadForm from "./components/UploadForm";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    const res = await API.get("/videos");
    setVideos(res.data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🎬 ClipHub</h2>
      <UploadForm onUpload={fetchVideos} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
