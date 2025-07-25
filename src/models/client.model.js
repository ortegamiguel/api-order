import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
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
});

const Client = mongoose.model("Client", clienteSchema);
export default Client;
