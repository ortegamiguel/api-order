import mongoose from "mongoose";

const positionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  texto: {
    type: String,
    required: true,
  },
});

const Position = mongoose.model("Position", positionSchema);
export default Position;
