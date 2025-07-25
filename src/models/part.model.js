import mongoose from "mongoose";

const partSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  texto: {
    type: String,
    required: true,
  },
});

const Part = mongoose.model("Part", partSchema);
export default Part;
