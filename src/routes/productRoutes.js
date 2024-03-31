// routes/productRoutes.js
import express from "express";
const router = express.Router();
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productControllers.js";

// Rotas CRUD para produtos
router.post("/product", createProduct);
router.get("/product", getAllProducts);
router.get("/product/:id", getProductById);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;
