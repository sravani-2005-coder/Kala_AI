# 🧶 KALA AI

### AI-Assisted Digital Marketplace for Indian Handloom & Handicraft Artisans

KALA AI is a full-stack web platform designed to digitally empower Indian handloom and handicraft artisans by providing them with an online marketplace to showcase and manage their handcrafted products.

The platform combines a modern e-commerce experience with AI-assisted product content generation, secure authentication, database-backed product management, and cloud deployment.

---

# 🌐 Live Demo

### Frontend
[KALA AI Live Application](https://kala-ai-frontend-lake.vercel.app/)

### Backend API
[KALA AI Backend API](https://kala-ai-fhj7.onrender.com/)

The KALA AI frontend is deployed on Vercel, while the backend REST API is deployed on Render.
The application uses MongoDB Atlas for persistent database storage.
- - -
## 📌 Project Overview

Traditional artisans often face challenges in reaching wider markets and presenting their products effectively online.

KALA AI aims to bridge this gap by providing a digital platform where artisans can:

- Showcase handcrafted products
- Manage product information
- View products through an online marketplace
- Add, edit and manage products
- Generate AI-assisted product descriptions
- Create secure accounts
- Authenticate using email/password
- Use Google OAuth authentication
- Store product and user information in MongoDB

The project was developed as part of the **TBI-GEU Internship AI-Assisted Full Stack Development Capstone**.

---

# ✨ Features

## 🛍️ Product Marketplace

- Browse artisan products
- View product details
- Product categories
- Product images
- Product descriptions
- Product pricing
- Artisan information

## 📦 Product Management

Authenticated users can:

- Add products
- View products
- Edit products
- Delete products
- Store product information in MongoDB

## 🤖 AI Product Studio

KALA AI includes an AI-assisted product content generator.

Users can provide:

- Product name
- Category
- Material
- Product features
- Desired writing tone

The AI system generates a professional product description that can be copied and used for product listings.

## 🔐 Authentication

The application supports:

- User registration
- Email/password login
- JWT authentication
- Protected routes
- User profile
- Google OAuth login

## 🌓 Dark Mode

The frontend includes a responsive dark-mode interface for improved usability and accessibility.

## 📱 Responsive UI

The application is designed to work across:

- Desktop
- Tablet
- Mobile devices

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router
- React Hot Toast

## Backend

- Node.js
- Express.js
- REST APIs
- Passport.js
- JWT Authentication
- Express Validator

## Database

- MongoDB
- MongoDB Atlas
- Mongoose

## AI

- Generative AI API
- AI-assisted product description generation

## Authentication

- JWT
- Google OAuth 2.0
- Passport.js
- bcryptjs

## Deployment

- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database

---

# 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │      KALA AI         │
                    │      Frontend        │
                    │   React + Vite       │
                    └──────────┬───────────┘
                               │
                               │ REST API
                               ▼
                    ┌──────────────────────┐
                    │      Express.js      │
                    │       Backend        │
                    └──────────┬───────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
      ┌────────────┐    ┌─────────────┐   ┌─────────────┐
      │  MongoDB   │    │ JWT / OAuth │   │ AI Service  │
      │   Atlas    │    │    Auth     │   │             │
      └────────────┘    └─────────────┘   └─────────────┘

## Project Structure
Kala_AI/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── validators/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── screenshots/
│
├── README.md
└── .gitignore

---

# 🤖 AI Product Studio

KALA AI includes an AI-powered Product Studio that helps artisans and sellers create professional product descriptions for their handmade products.

Users can enter details such as:

- Product name
- Category
- Material
- Product features
- Preferred writing tone

The information is sent to the backend AI service, which generates a suitable product description.

### AI Workflow

```text
Product Information
        ↓
AI Product Studio
        ↓
Frontend Form
        ↓
Express.js Backend
        ↓
AI Service
        ↓
Generated Product Description
        ↓
AI Output
        ↓
Copy Generated Content

---

# 🔐 Authentication

KALA AI implements secure user authentication using JWT-based authentication.

### Authentication Features

- User registration
- Email and password login
- Password hashing using bcryptjs
- JWT token generation
- Protected API routes
- User profile access
- Google OAuth 2.0 authentication

### Email/Password Authentication Flow

```text
User Registration
        ↓
Password Hashing
        ↓
MongoDB
        ↓
User Login
        ↓
Credentials Verification
        ↓
JWT Token Generation
        ↓
Authenticated Requests


# Google Login
KALA AI Login
      ↓
Google Authentication
      ↓
Google OAuth Callback
      ↓
User Verification / Creation
      ↓
JWT Generation
      ↓
Authenticated Application

---

# 🚀 Deployment

KALA AI uses a cloud-based deployment architecture.

### Frontend

The React + Vite frontend is deployed using **Vercel**.

### Backend

The Node.js + Express backend is deployed using **Render**.

### Database

The application uses **MongoDB Atlas** as the cloud database.

### Deployment Architecture

```text
User
 │
 ▼
Vercel
React + Vite Frontend
 │
 │ HTTPS REST API
 ▼
Render
Node.js + Express Backend
 │
 ├──────────────► MongoDB Atlas
 │
 └──────────────► AI Service



---

# Step 6 — Add Live Demo

Now add:

```markdown

---

# 🎥 Demo Video

A complete demonstration of KALA AI is available below:

[▶️ Watch KALA AI Demo Video](PASTE_YOUR_VIDEO_LINK_HERE)
