import React, { useEffect, useState } from "react";
import API from "./api";
import UploadForm from "./components/UploadForm";
import VideoList from "./components/VideoList";
import Footer from "./components/Footer";  // ✅ import the footer

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
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-4 flex-grow-1">
        <h2 className="text-center mb-4">🎬 ClipHub</h2>
        <UploadForm onUpload={fetchVideos} />
        <VideoList videos={videos} />
      </div>
      <Footer /> {/* ✅ Footer added here */}
    </div>
  );
}

export default App;
