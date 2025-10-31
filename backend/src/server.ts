import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db";
import ProductRoute from "./routes/productRoute";
import BlogRoute from "./routes/blogRoutes";

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api", ProductRoute);
app.use("/api", BlogRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
