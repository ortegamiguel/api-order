import Employe from "../models/employe.model.js";

export const saveEmploye = async (req, res) => {
  try {
    const employe = req.body;
    const newEmploye = new Employe(employe);
    const savedEmploye = await newEmploye.save();
    res.status(201).json(savedEmploye);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteEmploye = async (req, res) => {
  const id = req.params.id;
  try {
    await Employe.findByIdAndDelete(id);
    res.status(200).json({ message: "Employe deleted successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getAllEmployes = async (req, res) => {
  try {
    const employes = await Employe.find();
    res.json(employes);
  } catch (error) {
    res.status(500).json({ error });
  }
};
