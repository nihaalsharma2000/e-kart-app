import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://first-user-1:first-user-password-01@user-table-0.rjz9zie.mongodb.net/ekart-db");
    console.log("Mongodb connected");
  } catch (error) {
    console.log("error", error);
  }
};
export default connectDB;