import Client from "../models/client.model.js";

export const saveClient = async (req, res) => {
  try {
    const client = req.body;
    const newClient = new Client(client);
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const id = req.params.id;
    await Client.findByIdAndDelete(id);
    res.status(200).json({ message: "Client deleted successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error });
  }
};
