import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "nodeApi",
    })
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error));
};

export default connectDB;
