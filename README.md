# 📝 Fullstack Notes App

A simple full-stack web app built with:

- Frontend: React.js (Vite)
- Backend: FastAPI (Python) + SQLite
- Docker & Docker Compose support

## 🚀 Features
- Create, list, and delete notes
- Basic login authentication (username: admin, password: secret)
- Backend API: /notes (GET, POST, DELETE)
- Docker support to run frontend & backend together

## 📦 Project structure
```
fullstack-notes-app/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── src/App.jsx
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🐳 Run with Docker Compose
```bash
docker-compose up --build
```

## ☁️ Deploy instructions
- Backend: Deploy on Render (Python web service)
- Frontend: Deploy on Vercel / Netlify

## ✏️ Default login
- Username: `admin`
- Password: `secret`