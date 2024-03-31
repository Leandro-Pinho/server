// routes/userRoutes.js
import express from "express";
const router = express.Router();
import userController from "../controllers/userController.js";

// Rotas CRUD para usuários
router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
