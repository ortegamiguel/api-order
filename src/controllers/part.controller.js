import Part from "../models/part.model.js";

export const savePart = async (req, res) => {
  try {
    const part = req.body;
    const newPart = new Part(part);
    const savedPart = await newPart.save();
    res.status(201).json(savedPart);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deletePart = async (req, res) => {
  const id = req.params.id;
  try {
    await Part.findByIdAndDelete(id);
    res.status(200).json({ message: "Part deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllParts = async (req, res) => {
  try {
    const parts = await Part.find();
    res.json(parts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
