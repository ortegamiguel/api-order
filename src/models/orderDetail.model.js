import mongoose from "mongoose";

const orderDetailSchema = new mongoose.Schema({
  numero_orden: {
    type: mongoose.Types.ObjectId,
    ref: "RepairOrder",
  },
  codigo: {
    type: String,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  valor_unitario: {
    type: Number,
    required: true,
  },
  unidad_medida: {
    type: Number,
    required: true,
  },
  parte: {
    type: mongoose.Types.ObjectId,
    ref: "Part",
  },
});

const OrderDetail = mongoose.model("OrderDetail", orderDetailSchema);
export default OrderDetail;
