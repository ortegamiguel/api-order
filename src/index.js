import cors from "cors";
import "dotenv/config";
import express from "express";
import { mongoose } from "mongoose";
import router from "./routes/routes.js";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
const mongoString = process.env.DATABASE_URL;

// Connect to MongoDB
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

database.set("debug", true);

// Middleware
app.use(express.json());

// Routes
app.use("/api", router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
