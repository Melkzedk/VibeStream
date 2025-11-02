🎬 ClipHub

ClipHub is a simple, modern video-sharing platform built with React, Node.js, Express, and MongoDB.
It allows users to upload, preview, view, download, and delete videos easily — like a lightweight YouTube clone.

🚀 Features

🎥 Upload videos with custom titles

👀 Preview videos before uploading

📺 View all uploaded videos in a responsive grid

💾 Download videos locally

❌ Delete videos (removes both file and database record)

💬 Catchphrases and animations for a friendly user experience

🦋 Built with Framer Motion for smooth UI transitions

📱 Responsive design using Bootstrap

🧱 Project Structure
cliphub/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── videoRoutes.js
│   ├── controllers/
│   │   └── videoController.js
│   ├── models/
│   │   └── Video.js
│   ├── uploads/                # stores uploaded videos
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── api.js
│   │   ├── components/
│   │   │   ├── UploadForm.js
│   │   │   ├── VideoList.js
│   │   │   └── Footer.js
│   │   └── index.js
│   └── package.json
│
└── README.md
## PROJECT SCREENSHOT
<img width="1919" height="583" alt="Screenshot 2025-11-02 130447" src="https://github.com/user-attachments/assets/f0c5dc35-61f7-4e65-ab4e-57ab41597ce1" />
<img width="1859" height="945" alt="Screenshot 2025-11-02 130542" src="https://github.com/user-attachments/assets/9a1f640e-40f1-4084-bd3a-d1520496bd78" />

🧩 Tech Stack
Layer	Technologies
Frontend	React, Bootstrap 5, Axios, Framer Motion
Backend	Node.js, Express, Multer, Mongoose
Database	MongoDB (local or cloud)
Storage	Local /uploads folder (can be upgraded to AWS S3 or Cloudinary)
⚙️ Installation & Setup
1️⃣ Clone the repository
https://github.com/Melkzedk/VibeStream.git
cd cliphub

2️⃣ Backend setup
cd backend
npm install


Create a folder to store uploads:

mkdir uploads


Then start the backend:

npm start


🟢 The backend runs by default on http://localhost:5000

3️⃣ Frontend setup

Open a new terminal:

cd frontend
npm install
npm start


🟢 The frontend runs by default on http://localhost:3000

📡 API Endpoints
Method	Endpoint	Description
POST	/api/videos/upload	Upload a new video
GET	/api/videos	Get all uploaded videos
DELETE	/api/videos/:id	Delete a video (file + DB record)
💫 Screens & Flow
Upload Page

Enter a video title

Select a video file

Preview before uploading

Click Upload Video 🚀

Home Page

Displays all videos from the database

Each video card shows:

Video preview

Title

Download button

Delete button

Footer

Displays: © All rights reserved MelkTech

🖼️ Example UI
🎬 ClipHub
--------------------------------------
[ Upload Form ]
🎥 Share your vibe, upload your clip!
[ Title input ]
[ File input + preview ]
[ Upload button ]

[ Video Cards Grid ]
--------------------------------------
© 2025 All rights reserved MelkTech

🔥 Future Improvements

👤 User authentication (login, profiles)

❤️ Like & comment system

☁️ Cloud file storage (AWS S3 / Cloudinary)

🧭 Pagination & search filters

🗑️ Recycle bin for deleted videos

🧠 AI-based video tagging or summarization

🧑‍💻 Author

MelkTech
📧 Email: melkywafula29@gmail.com
 (optional placeholder)
💼 Portfolio: melktech.dev
 (placeholder)

🪪 License

This project is licensed under the MIT License.
Feel free to use and modify it for personal or commercial purposes.

🌟 “Your story deserves the spotlight!”
