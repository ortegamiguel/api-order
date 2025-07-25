import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  codigo: {
    type: String,
    required: true,
    trim: true,
  },
  codigo_proveedor: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
  },
  valor_unitario: {
    type: Number,
    required: true,
  },
  unidad_medida: {
    type: String,
    required: false,
    trim: true,
  },
  intangible: {
    type: Boolean,
    required: false,
  },
  numero_parte: {
    type: String,
    required: false,
    trim: true,
  },
  vha: {
    type: Number,
    required: false,
    trim: true,
  },
  vhora: {
    type: Number,
    required: false,
    trim: true,
  },
  vdia: {
    type: Number,
    required: false,
    trim: true,
  },
  vsem: {
    type: Number,
    required: false,
    trim: true,
  },
  vmes: {
    type: Number,
    required: false,
    trim: true,
  },
  margen: {
    type: Number,
    required: false,
    trim: true,
  },
  ultimo_precio_compra: {
    type: Number,
    required: false,
    trim: true,
  },
  numero_ingreso: {
    type: Number,
    required: false,
    trim: true,
  },
  ubicacion: {
    type: String,
    required: false,
    trim: true,
  },
  proveedor: {
    type: Number,
    required: false,
    trim: true,
  },
  cod: {
    type: Number,
    required: false,
    trim: true,
  },
  trato: {
    type: Number,
    required: false,
    trim: true,
  },
  familia: {
    type: Number,
    required: false,
    trim: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
