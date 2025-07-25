import mongoose from "mongoose";

const employeSchema = new mongoose.Schema({
  codigo: {
    type: String,
    required: true,
  },
  rut: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  cargo: {
    type: mongoose.Types.ObjectId,
    ref: "Position",
  },
  bloqueado: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const Employe = mongoose.model("Employe", employeSchema);
export default Employe;
