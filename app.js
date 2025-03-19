const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const leadsRoutes = require("./routes/leads");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/", leadsRoutes);

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
    return mongoose.connection;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

app.listen(port, () => {
  connectToDatabase();
  console.log(`Server is running on port ${port}`);
});
