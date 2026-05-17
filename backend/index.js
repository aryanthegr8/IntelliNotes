import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import noteRoutes from "./routes/note.route.js";

const app = express();
dotenv.config();
const port = process.env.PORT;

// database connection
try {
  mongoose.connect(process.env.MONGO_URI);
  console.log("Db connected successfully");
} catch (error) {
  console.log("Error in connecting to db", error);
}

// Routing middleware
app.use(express.json());
app.use(cors());
app.use("/api/v1/noteapp", noteRoutes);

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
