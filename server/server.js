const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose
  .connect("mongodb://127.0.0.1:27017/handmadeDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((e) => console.log("Mongo error:", e.message));

app.use("/api/products", productRoutes);

app.get("/", (req, res) => res.send("API running ✅"));

app.listen(5000, () => console.log("Backend: http://localhost:5000"));