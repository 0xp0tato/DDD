import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionURL = process.env.MONGODB_CONNECTION_URI;
  const dbName = process.env.MONGODB_DATABASE;

  if (!connectionURL) {
    throw new Error("MONGODB_URL environment variable is not set");
  }

  mongoose
    .connect(connectionURL, {
      dbName: dbName,
    })
    .then(() => console.log("Database Connected Successfully"))
    .catch((err) => console.log("Error:", err));
};

export default connectToDB;
