import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.config || 5000;

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});