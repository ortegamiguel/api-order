import mongoose from "mongoose";

const repairOrder = new mongoose.Schema({
  numero_orden: {
    type: Number,
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  cod_creador: {
    type: String,
    required: true,
  },
  cliente: {
    type: mongoose.Types.ObjectId,
    ref: "Client",
  },
  observaciones: {
    type: String,
    required: false,
  },
  estado: {
    type: String,
    required: false,
  },
  nulo: {
    type: Boolean,
    required: false,
  },
  quienAnulo: {
    type: String,
    required: false,
  },
  lugar_reparacion: {
    type: String,
    required: false,
  },
  descuento: {
    type: Number,
    required: false,
  },
});

const RepairOrder = mongoose.model("RepairOrder", repairOrder);
export default RepairOrder;
