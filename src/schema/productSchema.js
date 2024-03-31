// models/Product.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  // outros campos do produto, se necessário
});

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
