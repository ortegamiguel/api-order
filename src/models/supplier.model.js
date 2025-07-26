import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  rut: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  ciudad: {
    type: String,
    required: true,
  },
  comuna: {
    type: String,
    required: true,
  },
  giro: {
    type: String,
    required: true,
  },
  nacional: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const Supplier = mongoose.model("Supplier", supplierSchema);
export default Supplier;
