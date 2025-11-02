import React from "react";

export default function VideoList({ videos }) {
  return (
    <div className="row">
      {videos.map((v) => (
        <div key={v._id} className="col-md-4 mb-3">
          <div className="card">
            <video
              controls
              className="card-img-top"
              src={`http://localhost:5000/uploads/${v.filename}`}
            />
            <div className="card-body">
              <h6>{v.title}</h6>
              <a
                href={`http://localhost:5000/uploads/${v.filename}`}
                download
                className="btn btn-sm btn-success mt-2"
              >
                Download.
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
