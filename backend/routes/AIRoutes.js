import express from "express";
import { generateDescription } from "../controllers/AIController.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "AI Route Working" });
});

router.post("/product-description", generateDescription);

export default router;