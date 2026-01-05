import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));
  try {
    const envUri = process.env.MONGODB_URI || process.env.MONGODB_URL || "mongodb://127.0.0.1:27017";
    // If the provided URI does not include a database path, append the default DB name
    const dbUri = envUri.split("/").length <= 3 ? `${envUri}/imagify` : envUri;
    await mongoose.connect(dbUri);
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  }
};

export default connectDB;