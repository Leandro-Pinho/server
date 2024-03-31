// routes/orderRoutes.js
import express from "express";
const router = express.Router();
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/orderControllers.js";

// Rotas CRUD para pedidos
router.post("/order", createOrder);
router.get("/order", getAllOrders);
router.get("/order/:id", getOrderById);
router.put("/order/:id", updateOrder);
router.delete("/order/:id", deleteOrder);

export default router;
