import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const MONGO_DB_URL = process.env.MONGODB_URI;

async function connectDB() {
  try {
    const mongo = await mongoose.connect(MONGO_DB_URL);
    console.log("DB connection successfull");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
export default connectDB;
