require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/SaakiDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));


app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`🚀 Server started at port ${PORT}`));
