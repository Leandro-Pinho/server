// models/Order.js
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }],
    status: {
      type: String,
      enum: ["Pendente", "Processando", "Concluído"],
      default: "Pendente",
    },
    // outros campos do pedido, se necessário
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("Order", orderSchema);

export default OrderModel;
