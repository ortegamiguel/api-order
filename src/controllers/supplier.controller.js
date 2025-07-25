import Supplier from "../models/supplier.model.js";

export const saveSupplier = async (req, res) => {
  try {
    const supplier = req.body;
    const newSupplier = new Supplier(supplier);
    const savedSupplier = await newSupplier.save();
    res.status(201).json(savedSupplier);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteSupplier = async (req, res) => {
  const id = req.params.id;
  try {
    await Supplier.findByIdAndDelete(id);
    res.status(200).json({ message: "Supplier deleted successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ error });
  }
};
