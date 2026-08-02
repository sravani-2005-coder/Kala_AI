import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";

import connectDB from "./config/db.js";
import passport from "./config/passport.js";

import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";
import AIRoutes from "./routes/AIRoutes.js";
dotenv.config();

connectDB();

const app = express();

// CORS
app.use(
  cors({
    origin:["http://localhost:5173",
    "https://kala-ai-frontend-lake.vercel.app"], 
    credentials: true,
  })
);

// Body Parser
app.use(express.json());

// Session
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/ai", AIRoutes);
// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to KALA AI Backend 🚀",
  });
});

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});