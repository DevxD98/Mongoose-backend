# Blog Web

## 📌 Project Overview
 A simple web application that allows users to add and view posts. It is built using **Node.js**, **Express.js**, and **MongoDB**.

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB

---

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/blog-web.git
cd blog-web
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Configure MongoDB**
Ensure MongoDB is running locally or provide a MongoDB URI in `config/config.js`.

---

## 📌 API Endpoints

### **1️⃣ Get All Posts**
- **URL:** `GET /posts`
- **Response:**
  ```json
  [
    { "userID": 1, "id": 1, "title": "Post Title", "body": "Post Content" }
  ]
  ```

### **2️⃣ Add a New Post**
- **URL:** `POST /addPost`
- **Request Body:**
  ```json
  {
    "userID": 1,
    "id": 1,
    "title": "New Post",
    "body": "Post content"
  }
  ```
- **Response:**
  ```json
  { "message": "Post added successfully!" }
  ```

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 📩 Contact
- **Your Name:** Dev Mondal
- **Email:** mondaldev75@gmail.com


