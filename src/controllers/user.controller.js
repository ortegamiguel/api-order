import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req?.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials username" });
    }

    const isMatch = user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET, // Store your secret in .env
      { expiresIn: "1h" } // Token expiration time
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10); // 10 is salt rounds
    console.log(hashedPassword);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
