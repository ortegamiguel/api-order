import OrderDetail from "../models/orderDetail.model.js";
import RepairOrder from "../models/repairOrder.model.js";

export const saveRepairOrder = async (req, res) => {
  try {
    const { order, items } = req.body;
    const newRepairOrder = new RepairOrder(order);
    const savedRepairOrder = await newRepairOrder.save();
    for (const item of items) {
      const newOrderDetail = new OrderDetail(item);
      newOrderDetail.numero = savedRepairOrder.numero_orden;
      await newOrderDetail.save();
    }
    res.status(201).json(savedRepairOrder);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateRepairOrder = async (req, res) => {
  const id = req.params.id;
  const { order, items } = req.body;
  try {
    const repairOrder = await RepairOrder.findByIdAndUpdate(id, order, {
      new: true,
    });
    await OrderDetail.deleteMany({ numero_orden: id });
    for (const item of items) {
      const newOrderDetail = new OrderDetail(item);
      newOrderDetail.numero = id;
      await newOrderDetail.save();
    }
    res.status(200).json(repairOrder);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteRepairOrder = async (req, res) => {
  const id = req.params.id;
  try {
    await RepairOrder.findByIdAndDelete(id);
    res.status(200).json({ message: "Repair order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getAllRepairOrders = async (req, res) => {
  try {
    const repairOrders = await RepairOrder.find().populate("cliente");
    res.json(repairOrders);
  } catch (error) {
    res.status(500).json({ error });
  }
};
