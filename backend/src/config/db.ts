import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/ekart-db");
    console.log("Mongodb connected");
  } catch (error) {
    console.log("error", error);
  }
};
export default connectDB;