import mongoose from "mongoose";

const familySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  texto: {
    type: String,
    required: true,
  },
});

const Family = mongoose.model("Family", familySchema);
export default Family;
