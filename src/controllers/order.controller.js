import Order from "../models/order.model.js";

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const saveOrder = async (req, res) => {
  const order = req.body;
  console.log(order);
  try {
    const newOrder = new Order(order);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Bad Request" });
  }
};

export const getLastOrderId = async (req, res) => {
  try {
    const lastOrder = await Order.find({}).sort({ _id: -1 }).limit(1);
    if (lastOrder) {
      res.json(lastOrder);
    } else {
      res.json({ lastOrderId: 0 });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
