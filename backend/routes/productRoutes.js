import express from "express";
import requireAuth from "../middleware/authMiddleware.js";
import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/",requireAuth, createProduct);

router.get("/search", searchProducts);

router.get("/:id", getProductById);

router.put("/:id",requireAuth, updateProduct);

router.delete("/:id",requireAuth, deleteProduct);
export default router;