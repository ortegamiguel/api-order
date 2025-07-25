import Position from "../models/position.model.js";

export const savePosition = async (req, res) => {
  try {
    const position = req.body;
    const newPosition = new Position(part);
    const savedPosition = await newPosition.save();
    res.status(201).json(savedPosition);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deletePosition = async (req, res) => {
  const id = req.params.id;
  try {
    await Position.findByIdAndDelete(id);
    res.status(200).json({ message: "Position deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllPositions = async (req, res) => {
  try {
    const position = await Position.find();
    res.json(position);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
