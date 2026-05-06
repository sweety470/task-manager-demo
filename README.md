#  Task Manager App (Full Stack)

A full-stack Task Manager application built with:

* **Backend:** Node.js, Express, TypeScript (ES Modules)
* **Frontend:** React, Vite, TypeScript

---

##  Features

* Create, Read, Update, Delete tasks
* Toggle task status (Done / Pending)
* Clean UI with Tailwind CSS
* RESTful API
* Layered backend architecture

---

##  Project Structure

```
task-manager/
 ├── backend/
 ├── frontend/
 ├── .gitignore
 └── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone repo

```
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
npm run dev
```

Runs on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

##  Environment Variables

### Backend (`backend/.env`)

```
PORT=5000
```

### Frontend (`frontend/.env`)

```
VITE_API_URL=http://localhost:5000
```

---

##  API Endpoints

* GET /tasks
* GET /tasks/:id
* POST /tasks
* PUT /tasks/:id
* DELETE /tasks/:id

---

##  Tech Stack

* React + Vite
* Node.js + Express
* TypeScript
* Tailwind CSS
* Axios

---

## Future Improvements

* Authentication (JWT)
* MongoDB integration
* Search & filters
* Pagination
* Drag & drop UI (Trello style)

---

##  Author

Sweety Goel
Full Stack Developer (MERN)

---

 If you like this project, give it a star!
