import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  codigo: {
    type: String,
    required: true,
  },
  codigo_proveedor: {
    type: String,
    required: true,
  },
  descripción: {
    type: String,
    required: true,
  },
  valor_unitario: {
    type: Number,
    required: true,
  },
  unidad_medida: {
    type: String,
    required: true,
  },
  ubicacion: {
    type: String,
    required: true,
  },
  proveedor: {
    type: mongoose.Types.ObjectId,
    ref: "Supplier",
  },
  familia: {
    type: mongoose.Types.ObjectId,
    ref: "Family",
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
