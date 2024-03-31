// controllers/orderController.js

import Order from "../schema/orderSchema.js";

// Criar um novo pedido
export const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Obter todos os pedidos
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user").populate("products");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obter um pedido por ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user")
      .populate("products");
    if (!order) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Atualizar um pedido
export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Excluir um pedido
export const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }
    res.status(200).json({ message: "Pedido excluído com sucesso" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
