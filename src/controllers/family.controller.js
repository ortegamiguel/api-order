import Family from "../models/family.model.js";

export const saveFamily = async (req, res) => {
  try {
    const family = req.body;
    const newFamily = new Family(family);
    const savedFamily = await newFamily.save();
    res.status(201).json(savedFamily);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteFamily = async (req, res) => {
  const id = req.params.id;
  try {
    await Family.findByIdAndDelete(id);
    res.status(200).json({ message: "Family deleted successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getAllFamilies = async (req, res) => {
  try {
    const families = await Family.find();
    res.json(families);
  } catch (error) {
    res.status(500).json({ error });
  }
};
